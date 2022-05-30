import React from 'react';

import { Link } from 'react-router-dom';

const Delivered = () => {
    
    return (
        <div className="p-10 my-10">
           <div className="mb-4">
           
<h2 className="text-3xl text-green-600">Successfully <br /> Delivered</h2>
           </div>

     <Link to="/my-order"><button className="py-2 px-4 bg-indigo-700 text-white ">Check Your Items</button></Link>
        </div>
    );
};

export default Delivered;