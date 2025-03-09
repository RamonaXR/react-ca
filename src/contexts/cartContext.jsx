import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

/**
 * Custom hook to access the cart context.
 *
 * @returns {Object} The cart context value, which includes the cart array and functions to manage the cart.
 */
export function useCart() {
  return useContext(CartContext);
}

/**
 * CartProvider Component.
 *
 * Provides the cart context to its children. It initializes the cart from localStorage
 * (if available) and synchronizes any cart updates to localStorage.
 *
 * The context value includes:
 * - `cart`: Array of product objects in the cart.
 * - `addToCart(product)`: Function to add a product to the cart. If the product already exists, its quantity is incremented.
 * - `removeFromCart(productId)`: Function to remove a product from the cart by its id.
 * - `clearCart()`: Function to remove all products from the cart.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will have access to the cart context.
 * @returns {JSX.Element} The provider component wrapping its children with the cart context.
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds a product to the cart. If the product already exists, increment its quantity.
   *
   * @param {Object} product - The product object to add to the cart.
   */
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  /**
   * Removes a product from the cart by its ID.
   *
   * @param {string|number} productId - The unique identifier of the product to remove.
   */
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  /**
   * Clears all items from the cart.
   */
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
