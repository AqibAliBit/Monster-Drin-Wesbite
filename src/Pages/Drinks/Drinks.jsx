import React, { useState } from 'react'
import "./Drinks.css";
import Navbar from '../../Component/Navbar/Navbar'
import { RiArrowRightUpLine } from "@remixicon/react";
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
import {Link, useNavigate} from 'react-router-dom'

const Drinks = () => {
  let navigate=useNavigate()

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
const [selectedPrice, setSelectedPrice] = useState("All");
const [selectedFlavor, setSelectedFlavor] = useState("All");

const filteredDrinks = drinks.filter((item) => {

  const matchPrice =
    selectedPrice === "All" ||
    item.price === selectedPrice;

  const matchFlavor =
    selectedFlavor === "All" ||
    item.flavor === selectedFlavor;

  return matchPrice && matchFlavor;

});
  return (
    <div>
      <Navbar/>
    <div className="drinks-page">
      {/* Sidebar */}

      <aside className="sidebar">
        <div className="filter-box">
          <div className="title">
            <h3>Flavor</h3>
            <span onClick={()=>{
              setSelectedFlavor('All')
            }}>Reset</span>
          </div>

        <label>
  <input
    type="checkbox"
    checked={selectedFlavor === "Original"}
    onChange={() => setSelectedFlavor("Original")}
  />
  Original
</label>

<label>
  <input
    type="checkbox"
    checked={selectedFlavor === "Mango"}
    onChange={() => setSelectedFlavor("Mango")}
  />
  Mango
</label>

<label>
  <input
    type="checkbox"
    checked={selectedFlavor === "Kiwi"}
    onChange={() => setSelectedFlavor("Kiwi")}
  />
  Kiwi
</label>
        </div>

        <div className="filter-box">
          <div className="title">
            <h3>Type</h3>
            <span>Reset</span>
          </div>

          <label><input type="checkbox" /> Regular</label>
          <label><input type="checkbox" /> Zero Sugar</label>
          <label><input type="checkbox" /> Ultra</label>
          <label><input type="checkbox" /> Juice</label>
          <label><input type="checkbox" /> Rehab</label>
          <label><input type="checkbox" /> Hydro</label>
        </div>

        <div className="filter-box">
          <div className="title">
            <h3>Pack Size</h3>
            <span>Reset</span>
          </div>

          <label><input type="checkbox" /> Single Can</label>
          <label><input type="checkbox" /> Pack of 4</label>
          <label><input type="checkbox" /> Pack of 6</label>
          <label><input type="checkbox" /> Pack of 12</label>
        </div>

        <div className="filter-box">
  <div className="title">
    <h3>Price</h3>
    <span onClick={()=>{
      setSelectedPrice('All')
    }}>Reset</span>
  </div>

  <div className="price-buttons">
<button onClick={() => setSelectedPrice("₹99")}>₹99</button>
<button onClick={() => setSelectedPrice("₹199")}>₹199</button>
<button onClick={() => setSelectedPrice("₹299")}>₹299</button>
<button onClick={() => setSelectedPrice("₹399")}>₹399+</button>
<button onClick={() => setSelectedPrice("All")}>All</button>
  </div>
</div>
      </aside>

      {/* Content */}

      <div className="content">
        {/* Banner */}

        <div className="banner">
          <div>
            <h1>Pure Energy Big Discount</h1>

            <p>Save up to 50% off on your first order</p>

            <div className="coupon">
              <input
                type="text"
                placeholder="Your email address"
              />

              <button>Get Coupon</button>
            </div>
          </div>

          <img
            src="https://seeklogo.com/images/M/monster-energy-logo-7A04A63E68-seeklogo.com.png"
            alt=""
          />
        </div>

        <h2 className="heading">Popular Products</h2>

        <div className="card-grid">
          {filteredDrinks.map((item) => (
            <div className="card" key={item.id}>
              <div className="image-box">
                <img src={item.image} alt="" />

                <span className="price">{item.price}</span>
              </div>

              <div className="card-bottom">
                <h3>{item.name}</h3>
     
                <button onClick={()=>{
                  navigate(`/Addcart/${item.id}`)
                }}>
                  <RiArrowRightUpLine />
                </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Drinks