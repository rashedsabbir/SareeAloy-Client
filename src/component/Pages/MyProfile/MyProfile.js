import React from 'react';
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth/useAuth"
const MyProfile = () => {
    const {logOut,user}=useAuth()
    console.log(user)

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
    <button>Manage Items</button>
</Link>
<Link to="/add-services" className="hover:bg-indigo-700 p-2 block">
    <button>Add Items</button>
</Link>
<button onClick={logOut} className="hover:bg-indigo-700 p-2 w-full border-t-2 border-indigo-700 text-left" >Log Out</button>
    </div>
            <div className="lg:w-3/4 bg-gray-900 ">
            <h2 className="text-3xl mb-8 p-4 bg-gray-800 bg-opacity-80 text-red-500">| My Profile</h2>
<div className="flex justify-center">
{
                       user.photURL ? <img
                       className="h-52 w-52 rounded-full"
                       src={user.photoURL}
                       alt=""
                     /> :<img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="" className="h-52 w-52 rounded-full" />
                     }
   
</div>
<div className=" bg-gray-800 mt-4 p-4">
<table className="border-2 w-full ">
{
                       user.displayName ? <tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Name:</td>
                       <td className="border-2  p-4  w-2/4 text-white">{user.displayName}</td>
                       </tr> :<tr className=""> <td className="border-2  text-pink-500 text-2xl w-2/4  p-4   my-2">Avater</td>
                       <td className="border-2 w-2/4  p-4  text-white">Avater</td>
                       </tr>
                     }
{
                       user.email ?<tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Email:</td>
                       <td className="border-2 p-4 w-2/4 text-white">{user.email}</td>
                       </tr> :<tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Email:</td>
                       <td className="border-2  p-4  w-2/4 text-white">N/A</td>
                       </tr>
                     }
<tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Id Created:</td>
                       <td className="border-2 p-4 w-2/4 text-white">{user.metadata.creationTime}</td>
                       </tr> 
                      

                      {user.phoneNumber? <tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Phone:</td>
                       <td className="border-2 p-4 w-2/4 text-white">{user.phoneNumber}</td>
                       </tr> :
                     <tr><td className="border-2  p-4  text-pink-500 text-2xl w-2/4  my-2">Phone:</td>
                     <td className="border-2 p-4 w-2/4 text-white">N/A</td>
                     </tr>  }

                     
</table>
<div className="mt-4">
<Link to="/update-profile">
<button className="py-2 px-4 border border-pink-600 hover:bg-gray-800 hover:text-pink-600 text-white bg-pink-600">Update Your Profile</button>
</Link> 
<button  className="py-2 px-4 border border-pink-600 hover:border-pink-300 hover:bg-pink-600 text-white bg-gray-900" onClick={logOut}>Log Out</button>
</div>
</div>
            </div>
        </div>
                </div>
    );
};

export default MyProfile;