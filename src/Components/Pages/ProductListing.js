import React from "react";
import "./ProductListing.scss";

import vincent1 from "../../Assets/Vincentimg1.png";
import banaras1 from "../../Assets/banaras.png";
import Story1 from "../../Assets/story by gardern.png";

import vincent2 from "../../Assets/vincent2.png";
import banaras2 from "../../Assets/banaras2.png";
import story2 from "../../Assets/story by gardern 2.png";

import vincent3 from "../../Assets/vincent3.png";
import banaras3 from "../../Assets/banaras 3.png";
import story3 from "../../Assets/story by gardern 3.png";

import vincent4 from "../../Assets/vincent4.png";
import banaras4 from "../../Assets/banaras 4.png";
import story4 from "../../Assets/story by gardern 4.png";

import vincent5 from "../../Assets/vincent5.png";
import banaras5 from "../../Assets/banaras 5.png";
import story5 from "../../Assets/story by gardern 5.png";

import floralBanner from "../../Assets/floral.png";

import backgroundImg from "../../Assets/background.png"; 



const ProductListing = () => {
  const products = [
    {
      id: 1,
      name: "Vincent Van Gogh Almond Blossom Wallpaper",
      price: "6,550.00",
      image: vincent1,
    },
    {
      id: 2,
      name: "Banaras, Indian Carpet Design Wallpaper",
      price: "6,550.00",
      image: banaras1,
    },
    {
      id: 3,
      name: "A Story by the Garden Wallpaper",
      price: "6,550.00",
      image: Story1,
    },
    {
      id: 4,
      name: "Golden Feather Pattern Wallpaper",
      price: "6,550.00",
      image: vincent2,
    },
    {
      id: 5,
      name: "Blue Blossom Art Wallpaper",
      price: "6,550.00",
      image: banaras2,
    },
    {
      id: 6,
      name: "Vintage Floral Texture Wallpaper",
      price: "6,550.00",
      image: story2,
    },
    {
      id: 7,
      name: "Elegant Beige Leaf Wallpaper",
      price: "6,550.00",
      image: vincent3,
    },
    {
      id: 8,
      name: "Luxury Black Gold Lines Wallpaper",
      price: "6,550.00",
      image: banaras3,
    },
    {
      id: 9,
      name: "Classic Blue Royal Wallpaper",
      price: "6,550.00",
      image: story3,
    },
    {
      id: 10,
      name: "Botanical Garden Green Wallpaper",
      price: "6,550.00",
      image: vincent4,
    },
    {
      id: 11,
      name: "Marble Texture Wallpaper",
      price: "6,550.00",
      image: banaras4,
    },
    {
      id: 12,
      name: "Royal Palace Wallpaper",
      price: "6,550.00",
      image: story4,
    },
    {
      id: 13,
      name: "Soft Pink Blossom Wallpaper",
      price: "6,550.00",
      image: vincent5,
    },
    {
      id: 14,
      name: "Nature Forest Wallpaper",
      price: "6,550.00",
      image: banaras5,
    },
    {
      id: 15,
      name: "Wood Panel Texture Wallpaper",
      price: "6,550.00",
      image: story5,
    },
    {
      id: 16,
      name: "Kids Animal Cartoon Wallpaper",
      price: "6,550.00",
      image: vincent1,
    },
  ];

  return (

     <div
    className="listing-bg"
    style={{ backgroundImage: `url(${backgroundImg})` }}
  >
    <div className="product-listing-page">
      {/* Banner */}
      <div className="banner">
        <img src={floralBanner} />

        <div className="banner-text">Floral Wallpapers</div>
      </div>
      {/* Your page content */}
      <div className="content-wrapper">
        {/* Everything else inside */}
      </div>

      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="filter-group">
            <h3>Categories</h3>
            <ul>
              {[
                "Abstract (3)",
                "Animal (20)",
                "Botanicals (6)",
                "Brick (10)",
                "Classic (5)",
                "Floral (6)",
                "Kids (3)",
                "Marble (3)",
                "Modern (20)",
                "Nature (6)",
                "Royal (10)",
                "Stripes (5)",
                "Texture (6)",
                "Wood (3)",
              ].map((cat, i) => (
                <li key={i}>
                  <input type="checkbox" /> {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3>Color</h3>
            <ul>
              <li><input type="checkbox" /> Blue</li>
              <li><input type="checkbox" /> Beige</li>
              <li><input type="checkbox" /> Green</li>
            </ul>
          </div>

          <div className="filter-group"><h3>Collection</h3></div>
          <div className="filter-group"><h3>Rooms</h3></div>
          <div className="filter-group"><h3>Sizes</h3></div>

          <div className="filter-group">
            <h3>Price</h3>
            <input type="range" min="0" max="30000" />
          </div>
        </aside>

        {/* Product Grid */}
        <section className="product-grid">
          <div className="grid-header">
            <h2>500+ Wallpapers</h2>
            <span>Best Selling</span>
          </div>

          <div className="grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p className="price">₹{p.price}</p>
                <p className="sub">Inclusive Tax | Free Shipping</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default ProductListing;
