// Function to add a product to the cart
const addToCart = async (userEmail, product) => {
    try {
      const response = await fetch(`https://crudcrud.com/api/your-api/cart/${userEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log('Product added to cart:', data);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  
  // Function to retrieve cart items for a user
  const getCartItems = async (userEmail) => {
    try {
      const response = await fetch(`https://crudcrud.com/api/your-api/cart/${userEmail}`);
      const data = await response.json();
      console.log('Cart items:', data);
      // Display cart items to the user
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  };
  
  // Example usage:
  const userEmail = 'user@example.com';
  const product = { id: '123', name: 'Product Name', price: 10.99 };
  addToCart(userEmail, product);
  getCartItems(userEmail);
  