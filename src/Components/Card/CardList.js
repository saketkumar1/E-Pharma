import React,{useEffect, useState} from "react";
import Card from "./Card";


export default function CardList(props) {

  const [getData,setData]=useState([])

  useEffect(()=>{
   
    getProduct()
  },[])

    async function getProduct(){

     const response= await fetch('https://fakestoreapi.com/products');
     const output=await response.json();

     const getmapeddata=output.map((pdtdata)=>{
      return {
          id:pdtdata.id,
          img: pdtdata.image,
          price: pdtdata.price,
          title: pdtdata.title,
          quantity: 0,
        };
      })
     
     setData(getmapeddata)
    }


  return getData.map((CardData,i) => {
    return (
      <div>
        <Card
          CardData={CardData}
          key={i}
          index={i}
          addCart={props.addCart}
        ></Card>
      </div>
    );
  });
}
