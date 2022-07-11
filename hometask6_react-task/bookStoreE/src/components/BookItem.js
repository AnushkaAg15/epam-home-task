import React from 'react';
import "./css/BookItem.css";
import {Link} from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import unavailable from "./unavailable.jpg";
import {loadCurrentItem} from "../redux/Shopping/shopping-actions";
import {connect} from "react-redux";

function BookItem({bookData, loadCurrentItem}) {
  // const navigate = useNavigate();
  // //console.log(props.bookObj);
  // const toDetailPage = ()=>{
  //   navigate('/detailPage', {state:bookData});
  // }
  const image = (bookData.thumbnailUrl !== undefined) ? bookData.thumbnailUrl : unavailable;
  return (
    <div className='book-item'>
      <img className='book-image' src={image} alt="this is book cover" />
      <h4 className='book-title'>{bookData.title}</h4>
      <p className='book-category'>{bookData.categories[0]}</p>
      <Link to={`/bookItem/${bookData.id}`}>
        <button className='buy-btn' onClick={()=>loadCurrentItem(bookData)}>Buy Button</button>
      </Link>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}
export default connect(null, mapDispatchToProps)(BookItem);