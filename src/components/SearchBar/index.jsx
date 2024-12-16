/* eslint-disable react/prop-types */
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
