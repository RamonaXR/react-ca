/**
 * SearchBar Component.
 *
 * Renders an input field that allows users to search through a list of products.
 * As the user types, the products are filtered based on the product title (case-insensitive)
 * and the filtered list is updated via the setFilteredProducts callback.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.products - Array of product objects to search through.
 * @param {Function} props.setFilteredProducts - Callback function to update the list of filtered products.
 * @returns {JSX.Element} The rendered SearchBar component.
 */
export default function SearchBar({ products, setFilteredProducts }) {
  function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query),
    );
    setFilteredProducts(filtered);
  }

  return (
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full p-2 border rounded mb-4"
      onChange={handleSearch}
    />
  );
}
