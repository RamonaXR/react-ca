/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

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
