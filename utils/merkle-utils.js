const {ethers} = require('ethers');
const { keccak256 } = require('ethers/lib/utils');
const {MerkleTree} = require('merkletreejs')


// input: an address and a number representing 
// the index of that address in an array
export function merkleLeaf(entrant, index) {
    return ethers.utils.solidityKeccak256(
        ["address", "uint256"],
        [entrant, index]
    );
}

// input: address[]. eg [0xa, 0xb, 0xc...] 
export function merkleRoot(addrArray) {
    const entries = addrArray.map((elem, idx) => [elem, idx]);
    
    const leaves = entries.map(elem => merkleLeaf(elem[0], elem[1]));

    const merkleTree = new MerkleTree(
        leaves,      // raw data
        keccak256,   // fn of leaves to compute "up the tree"
        {sort: true} // sort so the tree is deterministic
    );
    return merkleTree.getHexRoot();
}

export function merkleProofForIdx(addrArray, idx) {

    //turn parameters from a tuple of [address, index] to a hash of the tuple
    const merkleLeaf =  ethers.utils.solidityKeccak256(
                                        ["address", "uint256"],
                                        [addrArray[idx], idx]
                                        );
    console.log('merkle leaf', merkleLeaf);

    //turn each addres in the array to a tuple of [address, index]
    const entries = addrArray.map((elem, idx) => [elem, idx]);
    console.log('entries',entries);

    //map through tuple and make a hash of each of them
    const leaves = entries.map(elem => ethers.utils.solidityKeccak256(
                                        ["address", "uint256"],
                                        [elem[0], elem[1]]
                                        ));
    console.log('leaves',leaves);

    //use merkle tree library to construct a merkle tree from the leaves
    const merkleTree = new MerkleTree(
        leaves,      // raw data
        keccak256,   // fn of leaves to compute "up the tree"
        {sort: true} // sort so the tree is deterministic
    );
    console.log('merkle tree',merkleTree);
    console.log('merkle tree proof', merkleTree.getProof(merkleLeaf)[0].data);

    const merkleTreeArray = [];

    //creates an array of merkle proofs for each merkle leaf
    merkleTreeArray.push(Array.from(merkleTree.getProof(merkleLeaf)[0].data))
    console.log(merkleTreeArray)
    return merkleTreeArray;
    // return merkleTree.getProof(merkleLeaf)[0].data;
}