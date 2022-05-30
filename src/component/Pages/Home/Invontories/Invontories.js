import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

import { Link } from 'react-router-dom';

const Inventories = () => {
    const [offers,setOffers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/offers")
        .then(res=>res.json())
        .then(data=>setOffers(data.offer))
    },[])

    
    return (
        <div>
           <div className="lg:p-16 md:p-8 p-8">
           <h4 className="text-xl text-pink-500 font-medium my-2">Choose Your Inventory</h4>
            <h1 className="text-4xl text-blue-900 font-medium">Select Your Best Package <br /> For Your Travel</h1>
           </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-8">
                {
                    offers.map(offer=><Inventory key={offer._id} offer={offer}></Inventory>).slice(0,6)
                }

</div>
<div>
<Link className="hover:border-red-500 border-b-2" to="/inventory">
<button className="text-white bg-blue-900 rounded-sm w-auto py-3 px-8">Manage Inventories</button>
                       </Link>
        </div>
        </div>
        
    );
};

export default Inventories;