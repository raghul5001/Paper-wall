import React from 'react'
import './Header.scss'; 
import img2 from "./img/Wallanticslogo.jpg"
import img3 from "./img/cart.png"
import img4 from "./img/contactlogo.jpg"
import img5 from "./img/Flaglogo.jpg"
import img6 from "./img/search.png"
function Header() {
  function HeaderTop() {
    return (
      <div className="header-top">
        <div className="header-container">
          <div className="logo">
            <img src={img2} alt="Wallantics Logo" />
          </div>
          <div className="search-bar-container">
            <input type="text" placeholder="Search for art, kids, abstract wallpapers" />
          </div>

          <div className="search-icon">
            <img src={img6} alt="search" />
          </div>
          <div className="caller">
            <img src={img4} alt="contact" />
          </div>
          <div className="header-right">
            <div className="contact-info">
              <p>Need Help?</p>
              <h4>+044 65483 46823</h4>
            </div>
            <div className="Flag">
              <img src={img5} alt="Flag" />
            </div>
            <div className="language-selector">
              <select>
                <option value="en">EN</option>
                <option value="Tam">TAM</option>
              </select>
            </div>
            <div className="cart-icon">
              <img src={img3} alt="Cart" />

              <div className="add-cart">
                <h4>cart</h4></div>
            </div>
            <button className="login-btn">Login</button>
            <div><hr></hr></div>
          </div>
        </div>
      </div>
    );
  }

  function HeaderNav() {
    return (
      <div className="header-nav">
        <ul className="nav-links">
          <li><p>Wallpaper</p></li>
          <li><p>Flooring</p></li>
          <li><p>3D Panel</p></li>
          <li><p>Blinds</p></li>
          <li><p>Artificial Grass</p></li>
          <li><p>PVC Foam Sheet</p></li>
          <li><p>GYM Flooring</p></li>
          <li><p>Room Visualizer</p></li>
          <li><p>E-Catalogue</p></li>
        </ul>
      </div>
    );
  }

  return (
    <header className="main-header">
      <HeaderTop />
      <HeaderNav />
    </header>
  );
}

export default Header;