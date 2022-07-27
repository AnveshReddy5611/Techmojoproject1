// import React from 'react'
// import UserData from "./products.json"
// import './Products.css'
// // import { useState } from "react"

// function Products () {
//   return (
//     <div >
//       {UserData.products.map((UserName ,index)=>(
//       <div key={index}><div className="card"><ol><li>{UserName.title}</li><li><img src={UserName.images[0]} alt=""/></li><li>{UserName.description}</li><li>{UserName.price}</li><li>
//       {UserName.category}</li><li>{UserName.discountPercentage}</li><li>{UserName.rating}
//       </li><li>{UserName.stock}</li><li>{UserName.brand}</li></ol></div></div>
//    ))}</div>
//   )}

// export default Products;

import React from "react";
import UserData from "./products.json";
import "./Products.css";
import { useState } from "react";

function Products() {
  // const[searchTerm, setSearchTerm]= useState('');
  return (
    <div className="App">
      {/* <input type="text" placeholder='search..' onChange={(event)=>{setSearchTerm(event.target.value);}} /> */}
      {UserData.products.map((val, key) => {
        <div className="user" key={key}>
          <p>{val.title}</p>
        </div>;
      })}
      <h1>hi</h1>
    </div>
  );
}

export default Products;

// filter((val)=>{
//   if(searchTerm===""){
//     return val
//   }
//   else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){

//   return val }
// }).
