import { useState } from "react";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/ProductCards";
import SearchBar from "../../components/SearchBar";
import { useCart } from "../../contexts/cartContext";

/**
 * Home Component.
 *
 * This component represents the home page of the application, displaying a list of products.
 * It utilizes the custom hook `useApi` to fetch product data from an API and the `useCart` context
 * to handle adding products to the cart via the `ProductCard` component. Users can filter products
 * using the `SearchBar` component.
 *
 * The component renders:
 * - A search bar for filtering products.
 * - Loading and error messages based on API request status.
 * - A grid of product cards.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  const { addToCart } = useCart();
  const { data, isLoading, isError } = useApi();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <main className="flex-grow p-4">
      <div className="w-full max-w-3xl mx-auto mb-6">
        <SearchBar
          products={data.data}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="flex flex-col items-center">
        {isLoading && <p>Loading products...</p>}
        {isError && <p>Failed to load products. Please try again later.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-center">
          {(filteredProducts.length > 0 ? filteredProducts : data.data)?.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}
