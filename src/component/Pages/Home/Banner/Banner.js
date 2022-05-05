import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
    const data = [
        {
          image: "https://i.ibb.co/RvyHK52/ea60f53c1ee0eccb8e1190576e1c11b6.jpg",
          caption: "Amazing Saree <br> from Tangail"
        },
        {
          image: "https://i.ibb.co/HYJw8Fm/6b6135782cf282056b4ce19fb41d9f3d-w1902-h605-CR0-44-1902-380-SX1500.jpg",
          caption: "Amazing Saree <br> from Banaras"
        },
        {
          image: "https://i.ibb.co/0CD0Vqt/silk-sarees-banner.webp",
          caption: "Amazing Saree <br> from  Gujrath"
        },
        {
          image: "https://i.ibb.co/TrXshfN/banner-fashion-tutorial-how-to-wear-a-saree-1533881068.jpg",
          caption: "Amazing Saree <br> from Dhaka"
        },
      ];
      const captionStyle = {
        fontSize: '5em',
        fontWeight: '',
        // backgroundImage:"linear-gradient(45deg,rgb(0,0,0,0.5),rgb(5,5,5,0.2))",
        // height:"100%"
      }
    //   const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    //   }
   
    return (
        <div>
            <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            // pauseIconSize="40px"
            // slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "600px",
            //   margin: "40px auto",
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default Banner;