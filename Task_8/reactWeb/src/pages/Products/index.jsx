import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=20')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div>
      {products.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
            <img src={product.thumbnail} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </Link>
      ))}
    </div>
  )
}

export default Products