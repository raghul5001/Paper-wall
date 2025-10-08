
import img1 from "../Assets/image5.jpeg";
import img2 from "../Assets/image1.jpeg";
import img3 from "../Assets/image2.jpeg";
import img4 from "../Assets/image3.jpeg";
import img5 from "../Assets/image4.jpeg";
import "./ProductDetails.scss";

const ProductDetails = () => {
  return (
    <div className="product-images">
      {/* Main Image (fixed) */}
      <div className="main-image">
        <img src={img1} alt="Main product" />
      </div>

      {/* Thumbnails (static) */}
      <div className="thumbnails">
        <img src={img1} alt="Thumbnail 1" />
        <img src={img2} alt="Thumbnail 2" />
        <img src={img3} alt="Thumbnail 3" />
        <img src={img4} alt="Thumbnail 4" />
        <img src={img5} alt="Thumbnail 5" />
      </div>
    </div>
  );
};

export default ProductDetails;