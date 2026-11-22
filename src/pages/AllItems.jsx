import ItemCard from "../components/ItemCard";
import InventoryControls from "../components/InventoryControls";

// this was originally in App.jsx lines 302-335
// all items shows the inventory items from the database
function AllItems({
  items,
  getItemDetails,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  filterAndSortItems,
}) {
  // filters and sorts the inventory items
  const displayedItems = filterAndSortItems(items);

  return (
    <div>
      <h2>Inventory Overview</h2>
      <p>Explore available items and see what's in stock.</p>

      <InventoryControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {displayedItems.length === 0 ? (
        <p>
          {items.length === 0
            ? "No inventory items have been added yet."
            : "No items match your search. Try a different name!"}
        </p>
      ) : (
        <div className="inventory-grid">
          {displayedItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              getItemDetails={getItemDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllItems;