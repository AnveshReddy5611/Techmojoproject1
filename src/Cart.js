import React from 'react';
import { useLocation } from "react-router-dom";

function Cart() {
    const location = useLocation();
    const { cartdetails } = location.state;
    console.log(cartdetails,"I am cart details")
    
  return (
    <div>   <h1> I am Cart Get out of here</h1>
        {cartdetails .map((ele, index) => (
          <div
            key={index}
            class="card"
            id="cardbody"
            style={{ width: "19.5rem", display: "inline-grid" }}
          >
            <img
              class="card-img-top"
              style={{ height: "18rem" }}
              src={ele.images[0]}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style={{ height: "3rem" }}>
                {ele.title}
              </h5>
              <p class="card-text">$&nbsp;{ele.price}</p>
              <p class="card-text">{ele.category}</p>
              <p class="card-text" style={{ height: "5rem" }}>
                {ele.description}
              </p></div></div>
            ))
        }
    </div>
  )
}

export default Cart