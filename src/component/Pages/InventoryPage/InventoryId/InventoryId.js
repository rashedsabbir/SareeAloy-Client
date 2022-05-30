import { faCircle, faClock } from '@fortawesome/free-regular-svg-icons';
import {  faCheckCircle, faInfo,   faTimesCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Rating } from 'react-simple-star-rating'

import useAuth from '../../../../hooks/useAuth/useAuth';


const InventoryId = () => {
    const {id}=useParams()
    const {user}=useAuth()
    const [offer,setOffer]=useState({})
    const {photo,title,price,duration,rating,introduction,highlight,groupSize,excluded,included,peopleRating,review}=offer
    // const [booking,setBooking]=useState({})
    const history=useHistory()
    // console.log(booking)
    const nameRef=useRef()
    const phoneRef=useRef()
    const dateRef=useRef()
    const messageRef=useRef()
    const personRef=useRef()
    const childrenRef=useRef()
    useEffect(()=>{
        const url=`http://localhost:5000/offers/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>setOffer(data))
    },[])

//     const bookPackage=(e)=>{
//         const packageBook=title
// const name=nameRef.current.value
// const email=user.email
// const phone=phoneRef.current.value
// const date=dateRef.current.value
// const message=messageRef.current.value
// const person=personRef.current.value
// const children=childrenRef.current.value
//         const book={
// name,email,phone,date,message,packageBook,person,children,photo,status:"Pending"
//         }
//         fetch(`https://tour-express.herokuapp.com/booking`,{
//             method:"POST",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify(book)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.acknowledged===true){
//                 history.push("/booking-complete")
//             }
//         })
//         nameRef.current.value=""
       
//         phoneRef.current.value=""
//         dateRef.current.value=""
//         messageRef.current.value=""
//         personRef.current.value="Adult"
//         childrenRef.current.value="Child"
    
// e.preventDefault()
//     }
    
    const clockFont=<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    
    const groupFont=<FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
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
                    <p className="text-sm font-medium text-blue-900">{review}</p>
                <Rating size={16}  ratingValue={rating}  />
                <p className="text-sm font-medium text-blue-900">{peopleRating} Review</p>
                </div>
            </div>
            <div className="lg:flex space-y-4 lg:space-y-0 justify-between border-t-2 border-b-2 border-gray-500 p-4">
                <div className="flex justify-center items-center gap-4">
                   <span className="text-4xl text-pink-500"> {clockFont}</span>
                    <div>
                        <p className="font-bold">Duration</p>
                        <small className="text-blue-900 font-medium">{duration}</small>
                    </div>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                   <span  className="text-4xl text-pink-500"> {groupFont}</span>
                    <div>
                        <p className="font-bold">Group Size</p>
                        <small className="text-blue-900 font-medium">{groupSize} people</small>
                    </div>
                </div>
               
            </div>
            {/* information section  */}
            <div className=" space-y-4">
                <div>
                    <button className="my-4 border-2 border-yellow-600 py-3 px-5 rounded-sm hover:bg-yellow-600 hover:text-white transition-colors font-medium">{infoFont} Information</button>
                </div>
                <div className="space-y-4 text-justify">
                    <h2 className="text-left text-3xl font-medium">OverView</h2>
                    <p>{introduction}</p>
                </div>
                <div className="space-y-4 text-justify">
                    <h2 className="text-left text-3xl font-medium">Highlight</h2>
                    <ul className="space-y-3 text-gray-700">{highlight?.map(list=><li key={list} ><span className="text-yellow-700">{dotFont}</span> {list}</li>)}</ul>
                </div>
                <table className="w-full text-left rounded-xl border-2 ">
                 <tbody>
                 
                    <tr className="border-2">
                        <td className="border-2 font-medium text-indigo-900 p-4">Package Price</td>
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
                <input type="text" className="p-4 w-full border-2 border-gray-200  rounded-md block" name="" id="" placeholder="Tour Type" />
                <textarea name="" className="p-4 w-full border-2 border-gray-200 rounded-md block" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
                <Rating size={18} RatingView={4}/>
                <br />
                <input type="submit" className="py-2 px-4 rounded-md bg-yellow-500 text-white" value="Submit" />
            </div>
            <div>

            </div>
          </div>
          {/* booking section  */}
          <div className="lg:w-1/4">
          <div className="bg-gray-100 rounded-xl p-4 lg:mt-0 mt-4 text-left space-y-4">
                <h1 className="text-3xl my-2">Book This Package</h1>
              <form className="space-y-4" >

{/* onSubmit={bookPackage} paste it after form class in up */}

              <input className="p-4 w-full border-2 border-gray-200   rounded-md block" type="text" ref={nameRef} required name="" id="" placeholder=" Full Name" />
                <input type="number" ref={phoneRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder=" Phone" />
                <input type="date" ref={dateRef} className="p-4 w-full border-2 border-gray-200 rounded-md block" required name="" id="" placeholder="11/23/2021" />
               <div className="flex gap-3">
               <select ref={personRef} required className="p-4 w-full border-2 border-gray-200 rounded-md block" >
                    <option value="Adult">
Adult
                    </option>
                    <option value="1">
1
                    </option>
                    <option value="2">
2
                    </option>
                    <option value="3">
3
                    </option>
                    <option value="4">
4
                    </option>
                </select>
                <select ref={childrenRef}  className="p-4 w-full border-2 border-gray-200 rounded-md block" >
                    <option value="Child">
Child
                    </option>
                    <option value="1">
1
                    </option>
                    <option value="2">
2
                    </option>
                    <option value="3">
3
                    </option>
                    <option value="4">
4
                    </option>
                </select>
               </div>
                <textarea ref={messageRef} required name="" className="p-4 w-full border-2 border-gray-200 rounded-md block" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
                <br />
                <input type="submit" className="py-4 w-full px-4 rounded-md bg-green-900 text-white" value="Book Now" />
              </form>
            </div>
          </div>
        </div>
    );
};

export default InventoryId;