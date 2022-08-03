import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import "./Navbar.css"
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
const cartdata=JSON.parse(localStorage.getItem("cart") || '[]')

function Navbar() {
    const[cartf,setCartf]
    =useState(cartdata)
  return (
    <div>


      <nav  class="navbar navbar-light bg-light">
  <form class="form-inline">
    <p id="btn1" ><Link to="/Product"><p class="navbar-brand">
          Products
        </p></Link></p>
    <p  id="btn2"><Link to="/Cart"  state={{ cartdetails: cartf}}><p class="navbar-brand"> <IoMdCart/>{cartf.length} </p></Link>
     </p>

      <p  id="btn3"><Link to="/"  > Logout</Link>
      </p>
  </form>
</nav>

    </div>
  )
}

export default Navbar