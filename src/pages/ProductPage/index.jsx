import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../contexts/cartContext";

/**
 * ProductPage Component.
 *
 * This component displays detailed information about a specific product.
 * It retrieves the productId from the URL parameters, fetches the product data from the API,
 * and renders product details including the image, description, pricing, discount information, and reviews.
 * Users can also add the product to their cart via the addToCart function from the cart context.
 *
 * @returns {JSX.Element} The rendered ProductPage component.
 */
export default function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    /**
     * Fetches product data from the API based on the productId.
     *
     * The function updates the product state with the fetched data,
     * and manages the loading and error states accordingly.
     *
     * @async
     * @function fetchProduct
     * @returns {Promise<void>}
     */
    async function fetchProduct() {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${productId}`,
        );
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (isLoading) return <p>Loading product...</p>;
  if (isError || !product)
    return <p>Failed to load product. Please try again later.</p>;

  const discountPercentage =
    product.price > product.discountedPrice
      ? ((product.price - product.discountedPrice) / product.price) * 100
      : null;

  return (
    <main className="p-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="w-full max-w-md">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-green-500 text-lg font-semibold mb-2">
            ${product.discountedPrice.toFixed(2)}
          </p>

          {product.price > product.discountedPrice && (
            <>
              <p className="text-gray-400 line-through">
                Original Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-red-500 font-bold">
                Discount: {discountPercentage.toFixed(0)}% Off
              </p>
            </>
          )}

          <button
            className="bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600 mt-4"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

        {product.reviews?.length > 0 && (
          <div className="w-full mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Reviews</h2>
            <ul className="space-y-4">
              {product.reviews.map((review) => (
                <li
                  key={review.id}
                  className="p-4 bg-gray-100 rounded shadow-md"
                >
                  <p className="font-semibold">{review.username}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {review.rating}/5
                  </p>
                  <p className="mt-2">{review.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
