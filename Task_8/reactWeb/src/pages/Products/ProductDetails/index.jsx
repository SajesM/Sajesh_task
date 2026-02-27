import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Header from "../../../shared/layout/Header";
import Footer from "../../../shared/layout/Footer";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
