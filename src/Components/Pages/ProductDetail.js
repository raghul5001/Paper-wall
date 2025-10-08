import React, { useState } from "react";
import img1 from "../Assets/image5.jpeg";
import img2 from "../Assets/image1.jpeg";
import img3 from "../Assets/image2.jpeg";
import img4 from "../Assets/image3.jpeg";
import img5 from "../Assets/image4.jpeg";
import img6 from "../Assets/review 1.jpeg";
import img7 from "../Assets/review 2.jpeg"; 
import "./ProductDetails.scss";
import "../Common/Header";
import"../Common/Footer";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }
  return (
    <div className="product-details-container">
      <Header/>
 
      <div className="product-images">
        <div className="main-image">
          <img src={img1} alt="Main product" />
        </div>
        <div className="thumbnails">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          <img src={img4} />
          <img src={img5}/>
        </div>
      </div>
 
      <div className="product-info">
        <h2>Custom Recipe Wallpaper, Handwritten Recipe</h2>
        <p className="price">₹3500 / Roll</p>
 
        <div className="color-selector">
          <span>Color - Green</span>
          <div className="color-options">
            <div className="color black" />
            <div className="color white" />
            <div className="color yellow selected" />
            <div className="color blue" />
            <div className="color pink" />
          </div>
        </div>
        <div className="quantity">
          <span>Quantity (Roll)</span>
          <div className="quantity-buttons">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className="calculator-buttons">
          <button className="calc-btn">Calculate Rolls</button>
          <button className="calc-btn">Installer Price Calculator</button>
        </div>
        <div className="pincode-check">
          <input type="text" placeholder="Enter Pincode" />
          <button>Check</button>
        </div>
        <div className="install-box">
          <input type="checkbox" defaultChecked />
          <label>
            <strong>Installation by Paperwall</strong>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam.
              <br />
              <strong>₹800 / Roll</strong> - Need to pay at the time of booking the order
            </span>
          </label>
        </div>
        <div className="instructions">
          <h4>Instructions on Application of Wallpaper</h4>
          <ol>
            <li>
              <strong>Prepare your surface/wall</strong>
              <ul>
                <li>Priming and Leveling</li>
                <li>Sizing</li>
                <li>Glue Application</li>
              </ul>
            </li>
            <li>
              <strong>Installation</strong>
              <ul>
                <li>STEP 1: Hang the first strip using a plumb line for a perfect vertical.</li>
                <li>STEP 2: Smooth out the surface using Wallpaper Smoother to avoid air bubbles.</li>
                <li>STEP 3: Hang subsequent strips edge-to-edge, matching the pattern.</li>
              </ul>
            </li>
            <li>
              <strong>Wallpaper Corners & Tricky areas to be taken care of</strong>
            </li>
          </ol>
        </div>
        <div className="addd-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
        <button className="room-visualizer">Room Visualizer</button>
        <div className="product-details-info">
          <h3>Product Details</h3>
          <div className="detail-row">
            <div className="label">Product Name</div>
            <div className="para">
              Custom Recipe Wallpaper, handwritten recipe
              <p>
                Create a raw and earthy atmosphere with stone-style wallpaper to create a perfect contemporary look. Wherever you use it, it will add colors of texture and character to your space and works especially well as a feature wall.
              </p>
            </div>
          </div>
          <div className="detail-row">
            <div className="label">Features</div>
            <div className="para">
              <p>Washable</p>
              <p>Easy to remove</p>
            </div>
          </div>
        </div>
        <div className="reviews">
          <h3>Customer Reviews</h3>

          <div className="review">
            <div className="review-header">
              <img src={img6}/>
              <div>
                <strong>John Doe</strong>
              </div>
            </div>
            <p>
              Nice Product<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <img src={img7} />
              <div>
                <strong>Derek</strong>
              </div>
            </div>
            <p>
              Nice Product<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
