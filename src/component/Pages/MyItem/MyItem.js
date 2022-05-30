import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth/useAuth"
const MyItem = () => {
    const {user,logOut}=useAuth()
    const [orders,setOrders]=useState([])
    console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/myorder/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            
<div className="lg:flex ">
    <div className="w-1/4 hidden lg:block space-y-4 p-10 text-left  bg-indigo-600 text-white ">
        <p className="text-3xl text-pink-400">DashBoard</p>
<Link to="/my-profile" className="hover:bg-indigo-700 p-2  block">
    <button>My Profile</button>
</Link>
<Link to="/my-order" className="hover:bg-indigo-700 p-2 block">
    <button>My Items</button>
</Link>
<Link to="/manage-items" className="hover:bg-indigo-700 p-2 block">
    <button>Manage all items</button>
</Link>
<Link to="/add-services" className="hover:bg-indigo-700 p-2 block">
    <button>Add Services</button>
</Link>
<button onClick={logOut} className="hover:bg-indigo-700 p-2 w-full border-t-2 border-indigo-700 text-left" >Sign Out</button>
    </div>
    <div className="lg:w-3/4 bg-gray-100 lg:p-10 p-4">
    <h2 className="text-3xl text-red-500">| My Items</h2>
    <ul className="">
        {
            orders.map(order=><li className=" rounded-lg gap-4 grid lg:grid-cols-4  grid-cols-2  lg:space-y-0 space-y-4 justify-center items-center p-2 my-4 bg-white">
<img src={order.photo} className="w-full rounded-lg h-24" alt="" />
<p className="text-xl flex-col flex">Name: <small>{order.packageBook}</small> </p>
<p className="text-xl flex-col flex">Date: <small>{order.date}</small> </p>

<p className={order.status!=="Approved"?"text-red-500 font-medium":"text-green-700 font-medium"}>{order.status}</p>

            </li> )
        }
        
    </ul>

    </div>
</div>
        </div>
    );
};

export default MyItem;