import React, { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders,setOrders]=useState([])
    

    useEffect(()=>{
        fetch("http://localhost:5000/booking")
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        }
            )
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useOrder;