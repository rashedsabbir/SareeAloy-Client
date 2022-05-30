import React, { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders,setOrders]=useState([])
    

    useEffect(()=>{
        fetch("https://lit-fjord-77387.herokuapp.com/booking")
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