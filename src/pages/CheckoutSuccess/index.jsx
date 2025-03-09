import { Link } from "react-router-dom";

/**
 * CheckoutSuccess Component.
 *
 * This component renders a success message indicating that the order has been
 * placed successfully. It provides a button that navigates the user back to the store.
 *
 * @returns {JSX.Element} The rendered CheckoutSuccess component.
 */
export default function CheckoutSuccess() {
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">
        Order Successful!
      </h1>
      <p className="text-lg mb-6">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Back to Store
      </Link>
    </main>
  );
}
