import { useCart } from "../../contexts/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

/**
 * CartIcon Component.
 *
 * This component renders a shopping cart icon with a badge that displays the total
 * number of items in the cart. When the icon is clicked, the user is navigated to
 * the checkout page.
 *
 * It uses the following hooks:
 * - `useCart` to retrieve the current cart state from the cart context.
 * - `useNavigate` from react-router-dom to handle navigation.
 *
 * @returns {JSX.Element} The rendered cart icon component.
 */
export default function CartIcon() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative p-2">
      <button onClick={() => navigate("/checkout/")}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
