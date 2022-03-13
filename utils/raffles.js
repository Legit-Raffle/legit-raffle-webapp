import {app, db} from "./firebase"
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
}   from 'firebase/firestore'

const colRef = collection(db,'raffles')

//GET ALL RAFFLES
const getAllRaffles = async() => {
    getDocs(colRef)
        .then((snapshot) => {
            let raffles = []
            snapshot.docs.forEach((doc) => {
                raffles.push({...doc.data(), id: doc.id})
            })
            console.log(raffles)
        })
        .catch(err => {
            console.log(err.message)
        })
};

//ADD RAFFLE
const addRaffle = async(e) => {
    // console.log(e)
    // const addRaffleForm = document.querySelector('.add')
    // addRaffleForm.addEventListener('submit', (e)=>{
    //     e.preventDefault()
    
    //     addDoc(colRef, {
    //         name: addRaffleForm.name.value,
    //         description: addRaffleForm.description.value
    //     })
    //     .then(() => {
    //         addRaffleForm.reset()
    //     })
    // })
}

//DELETE RAFFLE

export {getAllRaffles, addRaffle};