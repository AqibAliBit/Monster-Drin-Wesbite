import React, { useContext, useEffect, useState } from 'react'
import "./Order.css";
import Navbar from '../../Component/Navbar/Navbar'
import { RiDeleteBin6Line } from "@remixicon/react";
import { Context } from '../../Context/MainContext';
import {useNavigate} from 'react-router-dom'
const Order = () => {
 let navigate =useNavigate()
  let {product,setproduct} =useContext(Context)

   const [showPopup, setShowPopup] = useState(false);
   const [num, setnum] = useState(1)
function btnclicked(idx) {
let deleteproduct=[...product]
  deleteproduct.splice(idx,1)
  setproduct(deleteproduct)
    localStorage.setItem("product", JSON.stringify(deleteproduct));
}
let total=product.reduce((acc,item)=>{
   return acc + Number(item.price.replace("₹", ""))* item.quantity;
},0)
console.log(total);
function btnadd(index) {
  let newProduct = [...product];

  newProduct[index].quantity += 1;
 total+
  setproduct(newProduct);
}
function btnsub(index) {
        let newProduct = [...product];
if( newProduct[index].quantity>1){


  newProduct[index].quantity -= 1;

  setproduct(newProduct);
}
}
  return (
    <div>
      <Navbar/>
      <div className="cart-page">

      <div className="cart-left">

        <div className="cart-heading">
          <h1>My Cart</h1>
          <span>{product.length} Items</span>
        </div>

        {/* Card 1 */}

      {product.map((item,id)=>{

    localStorage.setItem("product", JSON.stringify(product));
       return <div className="cart-card">

          <div className="cart-image">
            <img
              src={item.image}
              alt=""
            />
          </div>

          <div className="cart-info">
            <h2>{item.name}</h2>
            <p>{item.flavor}r</p>
            <h3>{item.price}</h3>
          </div>

          <div className="quantity">

            <button onClick={()=>{
              btnsub(id)
            }}>-</button>

            <span>{item.quantity}</span>

            <button onClick={()=>{
              btnadd(id)
            }}>+</button>

          </div>

          <button className="delete-btn" onClick={()=>{
            btnclicked(id)
          }}>
            <RiDeleteBin6Line />
          </button>

        </div>
      })}



      </div>

      {/* Right */}

      <div className="cart-right">

        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>Rs{total}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>Free</span>
        </div>

        <div className="summary-row">
          <span>Discount</span>
          <span>-Rs50</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total</span>
          <span>Rs{product.length>0?total-50:0}</span>
        </div>

        <button className="checkout-btn" onClick={()=>{
          if(total===0){
            alert('Please Select Atleast One Product')
            
          }else{
            setShowPopup(true)
          }
          
        }}>
          Checkout
        </button>

        <button onClick={()=>{
          navigate('/Drinks')
        }} className="continue-btn">
          Continue Shopping
        </button>

      </div>

    </div>
    {showPopup && (
  <div className="popup">

    <div className="popup-box">

      <h2>Order Placed 🎉</h2>

      <p>Your order has been placed successfully.</p>
       <p>Your Total Bill Is {product.length>0?total-50:0}</p>
      <button onClick={()=>{
        setShowPopup(false)
        setproduct([])
      }}
        >
        Close
        
      </button>

    </div>

  </div>
)}
    </div>
  )
}

export default Order