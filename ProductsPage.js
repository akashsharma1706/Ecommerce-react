// ProductsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  // Assume products is an array of products with id, name, images, and reviews
  const products = [
    { id: 1, name: 'Product 1', images: ['image1.jpg', 'image2.jpg'], reviews: ['Review 1', 'Review 2'] },
    { id: 2, name: 'Product 2', images: ['image3.jpg', 'image4.jpg'], reviews: ['Review 3', 'Review 4'] },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
