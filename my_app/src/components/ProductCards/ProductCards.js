import react from "react";
import Pcard from "./Pcard";
import "./ProductCards.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function ProductCards(){
    const ProductData=[
        {
            id:1,
            title:"Apple Watch",
            price:"79,000",
            image:"https://m.media-amazon.com/images/I/51vHAEYKeWL._AC_UF452,452_FMjpg_.jpg",
        },
        {
            id:2,
            title:"Monitor",
            price:"90,000",
            image: "https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/3/1/d/ls27ag300nwxxl-full-hd-27-ls27ag300nwxxl-samsung-original-imagatrzphyheftp.jpeg?q=70",
        },
        {
            id: 3,
            title: "Camera",
            price: "25,000",
            image:
              "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
          },
          {
            id: 4,
            title: "IPhone 13",
            price: "65,000",
            image:
              "https://m.media-amazon.com/images/I/315vs3rLEZL._AC_UF334,334_FMjpg_.jpg",
          },
          {
            id: 5,
            title: "Redmi A1",
            price: "5,399",
            image:
              "https://m.media-amazon.com/images/I/41JM3Ra+tiL._AC_UF334,334_FMjpg_.jpg",
          },
          {
            id: 6,
            title: "Fire TV",
            price: "3,000",
            image:
              "https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UF334,334_FMjpg_.jpg",
          },
          {
            id: 7,
            title: "Washing Machine",
            price: "12,000",
            image:
              "https://m.media-amazon.com/images/I/41OSm89f6hL._AC_UF334,334_FMjpg_.jpg",
          },
          
        
          
          
          
        ];

        
 return (
    
        <div className="product_cards">
       {/* <div className="prev_arrow"><ArrowBackIosIcon/></div> */}

         {
            
            ProductData.map((value)=>(
  <Pcard image={value.image} title={value.title} price={value.price}/>
            ))
         }
         {/* <div className="next_arrow"><ArrowForwardIosIcon/></div> */}
         </div>
    );
 } 
 export default ProductCards;