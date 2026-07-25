import React, { useContext } from 'react'
import "./Addcart.css";
import {
  RiShoppingCart2Line,
  RiFlashlightFill,
  RiArrowDownSLine,
} from "@remixicon/react";
import img1 from '../../assets/monsterdrinkpic/img1.jpg'
import img2 from '../../assets/monsterdrinkpic/img2.jpg'
import img3 from '../../assets/monsterdrinkpic/img3.jpg'
import img4 from '../../assets/monsterdrinkpic/img4.jpg'
import img5 from '../../assets/monsterdrinkpic/img5.jpg'
import img6 from '../../assets/monsterdrinkpic/img6.jpg'
import img7 from '../../assets/monsterdrinkpic/img7.jpg'
import img8 from '../../assets/monsterdrinkpic/img8.jpg'
import img9 from '../../assets/monsterdrinkpic/img9.jpg'
import img10 from '../../assets/monsterdrinkpic/img10.jpg'
import img11 from '../../assets/monsterdrinkpic/img11.jpg'
import img12 from '../../assets/monsterdrinkpic/img12.jpg'
import { useParams } from 'react-router-dom';
import { Context } from '../../Context/MainContext';
import {useNavigate} from 'react-router-dom'
const Addcart = () => {
let navigate=useNavigate()
let {product,setproduct,price,setprice}= useContext(Context)
let {id}=useParams()

const drinks = [
  {
    id: 1,
    name: "Monster Original",
    price: "₹99",
    image: img1,
    description: "The classic Monster Energy drink with a smooth and powerful taste for all-day energy.",
    type: "Energy Drink",
    flavor: "Original",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 2,
    name: "Monster Mango Loco",
    price: "₹200",
    image: img2,
    description: "A tropical mango energy drink inspired by the vibrant flavors of Día de los Muertos.",
    type: "Juice Energy",
    flavor: "Mango",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 3,
    name: "Monster Ultra Sunrise",
    price: "₹299",
    image: img3,
    description: "A refreshing citrus energy drink with zero sugar and a crisp finish.",
    type: "Zero Sugar",
    flavor: "Orange Citrus",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 4,
    name: "Monster Zero Ultra",
    price: "₹180",
    image: img4,
    description: "Light, refreshing, and sugar-free with a clean citrus flavor.",
    type: "Zero Sugar",
    flavor: "Citrus",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 5,
    name: "Pipeline Punch",
    price: "₹220",
    image: img5,
    description: "A tropical blend of passion fruit, orange, and guava with Monster energy.",
    type: "Juice Energy",
    flavor: "Passion Fruit & Guava",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 6,
    name: "Monster Rehab",
    price: "₹250",
    image: img6,
    description: "A non-carbonated energy drink with tea, electrolytes, and natural flavors.",
    type: "Recovery Energy",
    flavor: "Lemon Tea",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 7,
    name: "Monster Ultra Violet",
    price: "₹250",
    image: img7,
    description: "A sugar-free energy drink with a sweet and refreshing grape flavor.",
    type: "Zero Sugar",
    flavor: "Grape",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 8,
    name: "Monster Ultra Paradise",
    price: "₹250",
    image: img8,
    description: "A crisp and refreshing tropical energy drink with kiwi and lime notes.",
    type: "Zero Sugar",
    flavor: "Kiwi Lime",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 9,
    name: "Monster Ultra Peachy Keen",
    price: "₹250",
    image: img9,
    description: "A smooth peach-flavored energy drink with zero sugar and full Monster power.",
    type: "Zero Sugar",
    flavor: "Peach",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 10,
    name: "Monster Nitro Super Dry",
    price: "₹250",
    image: img10,
    description: "Nitro-infused energy drink with a creamy texture and smooth citrus taste.",
    type: "Nitro Energy",
    flavor: "Citrus",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 11,
    name: "Monster Assault",
    price: "₹250",
    image: img11,
    description: "A bold cola-inspired energy drink with Monster's signature energy blend.",
    type: "Energy Drink",
    flavor: "Cola",
    packSize: "500ml",
    quantity: 1,
  },
  {
    id: 12,
    name: "Monster Lewis Hamilton Zero Sugar",
    price: "₹250",
    image: img12,
    description: "A zero sugar energy drink inspired by Formula 1 champion Lewis Hamilton.",
    type: "Zero Sugar",
    flavor: "Stone Fruits",
    packSize: "500ml",
    quantity: 1,
  },
];
let drink=drinks.find(function (item) {
return item.id===Number(id)  
})
console.log(drink);

  return (
     <div className="detail-page">

      <p className="breadcrumb">
        Home / Drinks / <span>{drink.name}</span>
      </p>

      <div className="detail-container">

        {/* LEFT */}

        <div className="detail-image">

          <div className="glass-circle">

            <img src={drink.image} alt={drink.name} />

          </div>

        </div>

        {/* RIGHT */}

        <div className="detail-content">

          <h1>{drink.name}</h1>

          <h2>{drink.price}</h2>

          <div className="buttons">

            <button className="cart-btn" onClick={()=>{
              navigate('/Order')
              setproduct([...product,drink])
         
            }}>
              <RiShoppingCart2Line />
              Add To Cart
            </button>

            <button className="buy-btn">
             <RiFlashlightFill/>
              Buy Now
            </button>

          </div>

          <div className="desc">

            <h3>Description</h3>

            <p>{drink.description}</p>

          </div>

          <div className="info">

            <div>
              <span>Type</span>
              <p>{drink.type}</p>
            </div>

            <div>
              <span>Flavor</span>
              <p>{drink.flavor}</p>
            </div>

            <div>
              <span>Pack Size</span>
              <p>{drink.packSize}</p>
            </div>

          </div>

          <div className="accordion">

            <div className="acc-box">
              <h4>
                Shipping
                < RiArrowDownSLine />
              </h4>

              <p>
                Free shipping on orders above ₹999.
                Delivery usually takes 2-5 business days.
              </p>
            </div>

            <div className="acc-box">
              <h4>
                Reviews
                < RiArrowDownSLine />
              </h4>

              <p>
                ⭐⭐⭐⭐⭐ (4.9/5)
                <br />
                More than 1200 happy customers love this drink.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Addcart