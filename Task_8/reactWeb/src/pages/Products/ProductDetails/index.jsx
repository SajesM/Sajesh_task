import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./styles.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;