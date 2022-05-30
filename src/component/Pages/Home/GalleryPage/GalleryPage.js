import React, { useEffect, useState } from 'react';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';

const GalleryPage = () => {
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/gallery")
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (
        <div>
             <div className="lg:p-16 md:p-8 p-8">
           <h4 className="text-xl text-pink-500 font-medium my-2"> Our Supplier Gallery</h4>
            <h1 className="text-4xl text-blue-900 font-medium">You Can Be The Part <br /> Of This Gallery</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
                {
                    gallery.map(pic=><GalleryPhoto key={pic._id} pic={pic}></GalleryPhoto>)
                }
            </div>
           
                   </div>
    );
};

export default GalleryPage;