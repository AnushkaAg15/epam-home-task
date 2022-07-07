import React,{useState, useEffect}from 'react';
import "./css/Navbar.css";
import Cart from "./Cart";
import Home from './Home';
import MyOerders from './MyOerders';
import DetailPage from './DetailPage';
import { Link, Routes, Route } from 'react-router-dom';
import {connect} from "react-redux";


function Navbar({cart}) {

  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
    console.log(cart);
    let count = 0;
    cart.forEach((item)=>{
      count += item.qty;
    })

    setCartCount(count);
  },[cart, cartCount]);

  return (
    <>
      <div className='navbar'>
      <div className='logo'>eCommerce Site</div>
      <div className='side-items'>
        <Link to="/">Home</Link>
        <Link to="/myOrders">My Orders</Link>
        <Link to="/cart">Cart {`(${cartCount})`}</Link>
      </div>
    </div>

    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/myOrders' element={< MyOerders />}></Route>
      <Route exact path='/cart' element={< Cart />}></Route>
      <Route exact path='/bookItem/:id' element={< DetailPage />}></Route>
    </Routes>
  </>  
  )
}

const mapStateToProps = state => {
  return {
    cart : state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar);