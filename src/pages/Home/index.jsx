import { useState } from "react";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/ProductCards";
import SearchBar from "../../components/SearchBar";
import { useCart } from "../../contexts/cartContext";

export default function Home() {
  const { addToCart } = useCart();
  const { data, isLoading, isError } = useApi();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <main className="flex-grow p-4">
      {/* Search Bar */}
      <SearchBar
        products={data.data}
        setFilteredProducts={setFilteredProducts}
      />

      {/* Product Cards */}
      <div>
        {isLoading && <p>Loading products...</p>}
        {isError && <p>Failed to load products. Please try again later.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
