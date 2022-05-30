import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';
import { TailSpin } from "react-loader-spinner";
import InventoryList from '../InventoryList/InventoryList';
import { Link } from 'react-router-dom';

const InventoryPage = () => {
    
    const [offers,setOffers]=useState([])
    const [page,setPage]=useState(0)
    const [pageCount,setPageCount]=useState(0)
    const size=6;
    useEffect(()=>{
        fetch(`http://localhost:5000/offers?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setOffers(data.offer)
            const count=data.count
            const pagination=Math.ceil(count/size)
            setPageCount(pagination)
        }
        
        )
    },[page,size])
    const {isLoading}=useAuth()
    if(isLoading===true){
     return <div className="flex justify-center p-36 items-center">
              <TailSpin
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
          </div>
    }
    return (
        <div>
           <div className="lg:p-16 md:p-8 p-8">
           <h4 className="text-xl text-pink-500 font-medium my-2">Choose Your Product</h4>
            <h1 className="text-4xl text-blue-900 font-medium">Select Your Best Product <br /> For Your Inventory</h1>
           </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-8 ">
                {
                    offers.map(offer=><InventoryList pageCount={pageCount} setPage={setPage} key={offer._id} offer={offer}></InventoryList>)
                }

</div>
<div>
          <Link className="hover:border-red-500 border-b-2" to="/inventory">
<button className="text-white bg-blue-900 rounded-sm w-auto py-3 px-8">Manage Inventories</button>
                       </Link>
          </div>
<div className="">
{
    [...Array(pageCount).keys()].map(number=>
    <button
    key={number}
    className={number===page?"bg-blue-900 text-white border-2 border-blue-400 py-2 px-4 m-2":"border-2 py-2 px-4 m-2"}
    onClick={()=>setPage(number)}
    >
{number+1}
    </button>
    )
}
</div>

        </div>
    );
};

export default InventoryPage;