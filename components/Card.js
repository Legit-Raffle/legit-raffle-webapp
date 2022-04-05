import React from 'react'


const Card = ({key, raffle}) => {
  return (
    <div key={key} class="bg-gray-50 m-5 max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{raffle.name}</div>
        <p class="text-gray-700 text-base">
            {raffle.address}
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">tokenAddress {raffle.classtokenAddress}</span>
    </div>
    </div>  
    )
}

export default Card