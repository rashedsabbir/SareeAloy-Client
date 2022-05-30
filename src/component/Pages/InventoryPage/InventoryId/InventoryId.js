import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {  faCheckCircle, faInfo,   faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';


import useAuth from '../../../../hooks/useAuth/useAuth';


const InventoryId = () => {
    const {id}=useParams()
    const {user}=useAuth()
    const [offer,setOffer]=useState({})
    const {photo,title,price,duration,introduction,highlight,groupSize,excluded,included,peopleRating,review}=offer
    // const [booking,setBooking]=useState({})
    const history=useHistory()
    // console.log(booking)
    const nameRef=useRef()
    const phoneRef=useRef()
    const dateRef=useRef()
    const messageRef=useRef()
    
    useEffect(()=>{
        const url=`https://lit-fjord-77387.herokuapp.com/offers/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>setOffer(data))
    },[])

    const bookPackage=(e)=>{
        const packageBook=title
const name=nameRef.current.value
const email=user.email
const phone=phoneRef.current.value
const date=dateRef.current.value
const message=messageRef.current.value

        const book={
name,email,phone,date,message,packageBook,photo,status:"Pending"
        }
        fetch(`https://lit-fjord-77387.herokuapp.com/booking`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(book)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                history.push("/delivered")
            }
        })
        nameRef.current.value=""
       
        phoneRef.current.value=""
        dateRef.current.value=""
        messageRef.current.value=""
        
    
e.preventDefault()
    }
    
   
    const infoFont=<FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
    const dotFont=<FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    const crossFont=<FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
    
    return (
        <div className="lg:flex gap-4 lg:p-10 p-4">
            {/* Inventory Id section  */}
          <div className="lg:w-3/4">
          <div className="w-full">
           <img src={photo} alt="" className="w-full rounded-md  lg:h-96 " />
           </div>
            <div className="lg:flex justify-between p-4">
                <div className="text-left">
                <h2 className="text-3xl font-medium">{title}</h2>
                
                </div>
                <div className="lg:text-right">
                    <p className="text-sm font-medium text-blue-900">Review: {review}</p>
                
                <p className="text-sm font-medium text-blue-900"> {peopleRating} rating</p>
                </div>
            </div>
            <div className="lg:flex space-y-4 lg:space-y-0 justify-between border-t-2 border-b-2 border-gray-500 p-4">
                <div className="flex justify-center items-center gap-4">
                   
                    <div>
                        <p className="font-bold">Supplier</p>
                        <p className="text-blue-900 font-medium">{duration}</p>
                    </div>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                   
                    <div>
                        <p className="font-bold">Quantity</p>
                        <small className="text-blue-900 font-medium">{groupSize} </small>
                    </div>
                </div>
               
            </div>
            {/* information section  */}
            <div className=" space-y-4">
                <div>
                    <button className="my-4 border-2 border-yellow-600 py-3 px-5 rounded-sm hover:bg-yellow-600 hover:text-white transition-colors font-medium">{infoFont} Information</button>
                </div>
                <div className="space-y-4 text-justify">
                    <h2 className="text-left text-3xl font-medium">Description</h2>
                    <p>{introduction}</p>
                </div>
                <div className="space-y-4 text-justify">
                    <h2 className="text-left text-3xl font-medium">Highlight</h2>
                    <ul className="space-y-3 text-gray-700">{highlight?.map(list=><li key={list} ><span className="text-yellow-700">{dotFont}</span> {list}</li>)}</ul>
                </div>
                <table className="w-full text-left rounded-xl border-2 ">
                 <tbody>
                 
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Price</td>
                        <td className="border-2 p-4">${price}</td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Included</td>
                        <td className=" border-2 p-4"><ul className=" space-y-2">{included?.map(list=><li  key={list}><span className="text-green-600">{checkFont} </span>{list}</li>)}</ul></td>
                    </tr>
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Excluded</td>
                        <td className=" border-2 p-4"><ul className="space-y-2 ">{excluded?.map(list=><li  key={list}><span className="text-red-700">{crossFont}</span> {list}</li>)}</ul></td>
                    </tr>
                 </tbody>
                </table>
            </div>
            {/* comment section  */}
            <div className="shadow-lg rounded-xl p-4 mt-4 text-left space-y-4">
                <h1 className="text-3xl my-2">Leave Your Comment</h1>
                <div className="flex  gap-4">
                <input className="p-4 w-full border-2 border-gray-200  rounded-md block" type="text" name="" id="" placeholder="Your Full Name" />
                <input type="email" className="p-4 w-full border-2 border-gray-200 rounded-md block" name="" id="" placeholder="Your Email" />
                </div>
                
                <textarea name="" className="p-4 w-full border-2 border-gray-200 rounded-md block" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
            
                <br />
                <input type="submit" className="py-2 px-4 rounded-md bg-yellow-500 text-white" value="Submit" />
            </div>
            <div>

            </div>
          </div>
          {/* booking section  */}
          <div className="lg:w-1/4">
          <div className="bg-gray-100 rounded-xl p-4 lg:mt-0 mt-4 text-left space-y-4">
                <h1 className="text-3xl my-2">Book This Product</h1>
              <form className="space-y-4" onSubmit={bookPackage}>



              <input className="p-4 w-full border-2 border-gray-200   rounded-md block" type="text" ref={nameRef} required name="" id="" placeholder=" Full Name" />
                <input type="number" ref={phoneRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder=" Phone" />
                <input type="date" ref={dateRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder="11/23/2021" />
               
                <textarea ref={messageRef} required name="" className="p-4 w-full border-2 border-gray-200 rounded-md block" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
                <br />
                <input type="submit" className="py-4 w-full px-4 rounded-md bg-green-900 text-white" value="Delivered" />
              </form>
            </div>
          </div>
        </div>
    );
};

export default InventoryId;