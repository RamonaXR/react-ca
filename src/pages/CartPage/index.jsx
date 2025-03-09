import { useCart } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";

/**
 * CartPage Component.
 *
 * Renders the shopping cart page, displaying a list of products added to the cart along with their
 * images, titles, and computed prices based on quantity and discounted price. It provides the ability
 * to remove individual items from the cart, clear the entire cart, or proceed to checkout.
 *
 * The total price is calculated by summing the product of quantity and discountedPrice for each item in the cart.
 *
 * @returns {JSX.Element} The rendered CartPage component.
 */
export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.discountedPrice,
    0,
  );

  /**
   * Handles the checkout process by clearing the cart and navigating to the checkout success page.
   */
  function handleCheckout() {
    clearCart();
    navigate("/checkout-success");
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 bg-gray-100 p-4 rounded shadow-md"
              >
                {/* Product Image */}
                <img
                  src={item.image.url}
                  alt={item.image.alt || item.title}
                  className="w-16 h-16 object-cover rounded"
                />

                {/* Product Details */}
                <div className="flex flex-col">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-gray-600">
                    ${(item.quantity * item.discountedPrice).toFixed(2)}
                  </span>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded self-end sm:self-center"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}
