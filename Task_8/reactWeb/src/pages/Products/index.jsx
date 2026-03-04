import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=20')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <Link to={`/products/${product.id}`} className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default Products;