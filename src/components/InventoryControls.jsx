// search and sorting controls for both inventory pages
function InventoryControls({ searchTerm, setSearchTerm, sortBy, setSortBy }) {
  return (
    <div className="inventory-controls">
      <input
        type="text"
        placeholder="Find an item by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
        <option value="quantity-high">Most in Stock</option>
        <option value="quantity-low">Least in Stock</option>
      </select>
    </div>
  );
}

export default InventoryControls;