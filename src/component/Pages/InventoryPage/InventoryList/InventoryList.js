
import React from 'react';
import { useHistory } from 'react-router';


const InventoryList = ({offer}) => {
    const {title,photo,price,introduction,duration,peopleRating}=offer
    console.log(offer)
    const history=useHistory()
    const handleClicked=id=>{
history.push(`/offers/${id}`)
    }
    return (
        <div className="hover:bg-gray-200 transition-colors shadow-xl aspect-auto">
          <div className="overflow-hidden">
<img className="hover:scale-x-110 hover:scale-y-110 transition-transform transform " src={photo} alt="" />
          </div>
          <div className="p-4">
            <div className="flex justify-between my-4 ">
              <h3 className="font-medium text-indigo-900"><span className="text-xl">${price}</span></h3>
              <p className="text-blue-900">Supplier: {duration} </p>
            </div>
          <h2 className="text-2xl font-medium text-red-400 my-4 text-left"> {title} </h2>
          <div className="flex justify-between my-4">
          <p className="text-blue-900 text-sm font-medium truncate">{introduction}</p>
          
          </div>
          <div className='flex justify-between my-4'>
          <p className="text-green-900 font-semibold text-sm">Quantity: {peopleRating}</p>
          </div>
          <button onClick={()=>handleClicked(offer._id)} className="text-white bg-blue-900 rounded-sm w-full py-3 px-8">Book Now</button>
          </div>
          
        </div>
    );
};

export default InventoryList;