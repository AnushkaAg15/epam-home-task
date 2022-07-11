import React, {useEffect,useState} from 'react';
import "../components/css/Cart.css";
import CartItem from './CartItem';
import {connect} from "react-redux";

function Cart({cart}) {
  console.log(cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    let price = 0;

    cart.forEach(item=>{
      price += item.qty*item.price;
    });

    setTotalPrice(price);
  },[cart, totalPrice,setTotalPrice])
  return (
    <div className='cart-container'>
      <div className="address">
        <h2>Shipping Address</h2>
        <div className="form-group">
          <input type="street"
            className="form-control"
            id="inputStreet"
            placeholder="Street" />

          <input type="city"
            className="form-control"
            id="inputCity"
            placeholder="City" />

          <input type="state"
            className="form-control"
            id="inputState"
            placeholder="State" />

          <input type="zip"
            className="form-control"
            id="inputZip"
            placeholder="Zip" />

          <input type="county"
            className="form-control"
            id="inputCounty"
            placeholder="County" />

          <input type="tel"
            className="form-control"
            id="inputCountry"
            placeholder="Phone Number" />
        </div>
        <button>Svae Address Button</button>
        <button>Edit Address Button</button>
      </div>

      <div className='bag'>
        <h2>Shopping Bag</h2>
        <div className='cartItems'>
          {cart.map((item)=>(
            <CartItem key={item.id} itemData={item}/>
          ))}
        </div>
        <h3>Payment Info</h3>
        <table>
          <tr>
            <td>Items Price</td>
            <td>₹{totalPrice}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>₹20</td>
          </tr>
          <tr>
            <td>Shipping Charges</td>
            <td>₹15</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>₹ {totalPrice+20+15}</strong></td>
          </tr>
        </table>


        <button>Checkout</button>
        <button>Cancel</button>
      
      </div>
    </div>

  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);