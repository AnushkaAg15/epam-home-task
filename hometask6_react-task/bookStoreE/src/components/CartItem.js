import React,{useState} from 'react'
import "./css/CartItem.css";
import {connect} from "react-redux";
import {removeFromCart, adjustQty} from '../redux/Shopping/shopping-actions';

function CartItem({itemData, removeFromCart, adjustQty}) {
  const [input, setInput] = useState(itemData.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  }
  return (
    <div className='cart-item'>
      <img src={itemData.thumbnailUrl}  srcset={`${itemData.thumbnailUrl} 2x`} alt='item'/>
      <div className='item-details'>
        <p><strong>{itemData.title}</strong></p>
        <p>{itemData.categories[0]}</p>
        <p>₹{itemData.price}</p>

        <div className='item-btn'>
          <input className='qty' type="number" value={input} onChange={onChangeHandler} />
          <button onClick={()=>removeFromCart(itemData.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id,value) => dispatch(adjustQty(id, value))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);