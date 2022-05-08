import React,{useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth/useAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddAnItem = () => {
    const { register, handleSubmit,reset } = useForm();
    const [inventory,inventories]=useState({})
    const {highlight,excluded,included}=inventory

    useEffect(()=>{
        const url=`https://lit-fjord-77387.herokuapp.com/inventories/617e806ea490a7bb0b574ea6`
fetch(url)
.then(res=>res.json())
.then(data=>inventories(data.inventories))
    },[])
    const onSubmit = data => {
        reset()
        
         data.highlight=highlight
         data.included=included
         data.excluded=excluded
         const addItems=data
         console.log(addItems)

         fetch("https://lit-fjord-77387.herokuapp.com/inventories",{
method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(addItems)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                toast("Item Has been added Successfully!")
            }
            
        })
    };
    const {logOut}=useAuth()


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
<Link to="/manage-orders" className="hover:bg-indigo-700 p-2 block">
    <button>Manage All Items</button>
</Link>
<Link to="/add-services" className="hover:bg-indigo-700 p-2 block">
    <button>Add Items</button>
</Link>
<button onClick={logOut} className="hover:bg-indigo-700 p-2 w-full border-t-2 border-indigo-700 text-left" >Log Out</button>
    </div>
          <div className="lg:w-3/4 bg-gray-900 ">
          <h2 className=" bg-gray-800 bg-opacity-80 py-4 text-3xl  text-red-500">| Add Items</h2>
          <form className=" lg:p-20 p-10 flex flex-col space-y-4 justify-center" onSubmit={handleSubmit(onSubmit)}>

<input className="border-2 p-2 border-indigo-900 rounded-md" placeholder="Name" {...register("title", { required: true, maxLength: 100 })} />


      <div className="lg:flex w-full">
      <input className="border-2 p-2 w-full border-indigo-900 rounded-md" placeholder="Photo URL" {...register("photo")} />
        <input className="border-2 p-2 w-full border-indigo-900 rounded-md" placeholder="supplier" {...register("duration")} />
      </div>
        <div className="lg:flex w-full">
        
        
        </div>
      <div className="lg:flex w-full">
      
        <input className="border-2 p-2 w-full border-indigo-900 rounded-md" placeholder="Quantity" {...register("quantity")} />
        
      </div>
       <div className="lg:flex w-full">
       <input className="border-2 p-2 w-full border-indigo-900 rounded-md" placeholder="Description" {...register("tourType")} />
        
        <input className="border-2 p-2 w-full border-indigo-900 rounded-md" placeholder="Price" type="number" {...register("price", { required: true, maxLength: 11})} />
       </div>
      
        <input className="bg-indigo-900 text-white py-2 rounded-md" type="submit" />
        <ToastContainer/>
      </form>
          </div>
      </div>
              </div>
      
    );
};

export default AddAnItem;