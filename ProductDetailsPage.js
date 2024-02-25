// ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { productId } = useParams();
  // Assume products is an array of products with id, name, images, and reviews
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        <h2>Images</h2>
        {product.images.map(image => (
          <img key={image} src={image} alt={product.name} />
        ))}
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          {product.reviews.map(review => (
            <li key={review}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
