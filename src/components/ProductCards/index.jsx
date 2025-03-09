import { useNavigate } from "react-router-dom";

/**
 * ProductCard Component.
 *
 * This component renders a card for a product that includes:
 * - A clickable image that navigates to the product detail page.
 * - The product title.
 * - Pricing details showing the discounted price and, if applicable, the original price.
 * - An "Add to Cart" button that triggers the addToCart callback.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product data.
 * @param {string|number} props.product.id - The unique identifier for the product.
 * @param {string} props.product.title - The title of the product.
 * @param {Object} props.product.image - The image data for the product.
 * @param {string} props.product.image.url - The URL of the product image.
 * @param {string} [props.product.image.alt] - The alt text for the product image.
 * @param {number} props.product.discountedPrice - The discounted price of the product.
 * @param {number} props.product.price - The original price of the product.
 * @param {Function} props.addToCart - Callback function to add the product to the cart.
 * @returns {JSX.Element} The rendered ProductCard component.
 */
export default function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  /**
   * Handles the click event on the product image by navigating to the product detail page.
   */
  function handleProductClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="flex flex-col justify-between p-4 bg-slate-200 w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
      <div
        onClick={handleProductClick}
        className="relative aspect-square bg-gray-300 rounded-md overflow-hidden"
      >
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="flex flex-col items-center gap-2 p-3 text-center">
        <h2 className="font-bold text-lg">{product.title}</h2>

        <div className="flex flex-col items-center min-h-[3rem]">
          <p className="text-green-500 font-semibold">
            ${product.discountedPrice.toFixed(2)}
          </p>
          {product.price > product.discountedPrice && (
            <p className="text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </section>
    </div>
  );
}
