import React from 'react'
import "../components/css/DetailPage.css";
//import {useLocation} from "react-router-dom";
import {connect} from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

function DetailPage({currentItem, addToCart}) {
  //const location = useLocation();

  console.log(currentItem);

  const image = currentItem.thumbnailUrl;
  const title = currentItem.title;
  const price = currentItem.price;
  const authorName = currentItem.authors[0];
  const pageCount = currentItem.pageCount;
  const isbn = currentItem.isbn;
  const desc = (currentItem.longDescription !== undefined) ? currentItem.longDescription : "Sorry! The book doesn't have any description";

  //console.log(idP);
  return (
    <div className='detail-page'>
      <div className='book-detail'>
        <img  src={image} alt="this is book cover"/>
        <div className='price-section'>
          <h1>{title}</h1>
          <p>Price: ₹{price}</p>
          <p>Author name: {authorName}</p>
          <p>Page count: {pageCount}</p>
          <p>ISBN no.: {isbn}</p>
          <button onClick={()=> addToCart(currentItem.id)}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <div className='desc-section'>
        <h3>Description of Book</h3>
        {desc}
      </div> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);