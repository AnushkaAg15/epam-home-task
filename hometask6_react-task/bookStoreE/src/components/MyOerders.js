import React from 'react';
import "../components/css/MyOrder.css";

function MyOerders() {
  return (
    <>
      <div className='order'>
        <div className='order-detail'>
          <p>Order PLaced: 01/July/2022</p>
          <p>Status: Delivered</p>
        </div>
        
        <div className='detail-container'>
          <img src='https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg'  srcset="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg 2x" alt='book selected'/>
          <div className='detail-book'>
            <h2>Book Title</h2>
            <p>Author Name</p>
            <p><strong>Book Price</strong></p>
          </div>
        </div>
      </div>

      <div className='order'>
        <div className='order-detail'>
          <p>Order PLaced: 01/July/2022</p>
          <p>Status: Delivered</p>
        </div>
        
        <div className='detail-container'>
          <img src='https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg'  srcset="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg 2x" alt='book selected'/>
          <div className='detail-book'>
            <h2>Book Title</h2>
            <p>Author Name</p>
            <p><strong>Book Price</strong></p>
          </div>
        </div>
      </div>

      <div className='order'>
        <div className='order-detail'>
          <p>Order PLaced: 01/July/2022</p>
          <p>Status: Delivered</p>
        </div>
        
        <div className='detail-container'>
          <img src='https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg'  srcset="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg 2x" alt='book selected'/>
          <div className='detail-book'>
            <h2>Book Title</h2>
            <p>Author Name</p>
            <p><strong>Book Price</strong></p>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default MyOerders;