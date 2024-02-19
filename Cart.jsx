import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import items from './CartItems';

const Cart = ({ items, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>
            <div className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <Button variant="danger" onClick={() => removeFromCart(item)}>
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="cart-summary">
        <h5>Total: ${calculateTotal(items)}</h5>
        <Button variant="primary">Checkout</Button>
      </div>
    </div>
  );
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price, 0).toFixed(2);
};

export default Cart;
