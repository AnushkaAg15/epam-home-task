import React from 'react';
import BookItem from './BookItem';
import "../components/css/Home.css";
//import bookData from '../bookData';

import { connect } from "react-redux";

function Home({products}) {
  //const bookList = bookData.map(book =><BookItem key={book.id} bookObj={book} bookTitle={book.title} bookImage={book.thumbnailUrl} bookCategory={book.categories}/>)
  return (
    
    <div className='container'>
      {products.map((prod) =>(<BookItem key={prod.id} bookData={prod}/>))}
    </div>


  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Home);