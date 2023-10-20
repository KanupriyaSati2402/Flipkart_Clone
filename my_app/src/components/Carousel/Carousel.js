import React,{useState} from "react";
import CarouselCard from "./CarouselCard";


function Carousel(){
    const data =[
        {
            id: 1,
      image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
      name: "Plants",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
      name: "Headphones",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
      name: "Mobile",
    },
  ];

  const [currentimage,setcurrentimage]=useState(data[0].image);
  const [index,setindex]=useState(0);
 function previmage(){
  if(index>=2) return;
  setcurrentimage(data[index+1].image);
  setindex(index+1);
 }
 function nextimage(){
  if(index==0) return;
  setcurrentimage(data[index-1].image);
  setindex(index-1);
 }
    return (
   <div className="carousel">
   {/* {carouselData.map((value)=>(  
      <CarouselCard image={value.image}/>
   ))} */}
   <img className="carousel_image" src={currentimage}/>
   <button onClick={nextimage}>Prev Image</button>
   <button onClick={previmage}>Next Image</button>
   </div>
    );
};

export default Carousel;