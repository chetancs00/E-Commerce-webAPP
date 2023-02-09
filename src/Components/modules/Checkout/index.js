import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { amountNumberFormatting } from '../../../utils/common'
import AppBase from '../../Base/AppBase'

const Checkout = () => {

    const cart = useSelector((state) => state.cart.items);
    let total = 0;
    cart?.forEach((item, index) => {
      total += item.productPrice * item.quantity;
    });  
  return (
    <AppBase>
        <div className='container'>
            <h1> Order Sumarry </h1>
            <div className="container">
        <div className="row">
          {cart?.map((item) => (
            <div className="col-4 mb-3">
              <img
                src={
                  item && item.productImage && item.productImage[0]
                    ? item.productImage[0].url
                    : "default-image.jpg"
                }
                className="img-thumbnail"
                style={{ height: "90px" }}
              />
              <p className="mt-3">{item.productName}</p>
              <p>₹{amountNumberFormatting(item.productPrice)}</p>
              <p>Total Price: ₹{amountNumberFormatting(item.productPrice * item.quantity)}</p>
            </div>
          ))}
        </div>
        <h3>Cart Total ₹{ amountNumberFormatting(total)}</h3>
      </div>
        </div>
    </AppBase>
  )
}

export default Checkout