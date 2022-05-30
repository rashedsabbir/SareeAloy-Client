import React from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import GalleryPage from '../GalleryPage/GalleryPage';
import Inventories from '../Invontories/Invontories';

import {TailSpin} from "react-loader-spinner";


const Home = () => {
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
      <>
        <Banner></Banner>
        <Inventories></Inventories>
        <GalleryPage></GalleryPage>
        <About></About>
        
      </>
    );
};

export default Home;