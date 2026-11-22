import ItemCard from "../components/ItemCard";
import ItemForm from "../components/ItemForm";
import InventoryControls from "../components/InventoryControls";

// this was originally in App.jsx lines 340-422
// moved my inventory here so App.jsx isnt so big
// added searching and sorting to make finding items easier
function MyInventory({
  myItems,
  currentUser,
  message,
  getItemDetails,
  showAddForm,
  setShowAddForm,
  handleAddItem,
  itemName,
  setItemName,
  itemDescription,
  setItemDescription,
  itemQuantity,
  setItemQuantity,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  filterAndSortItems,
}) {
  // filters and sorts the items before showing them
  const displayedItems = filterAndSortItems(myItems);

  return (
    <div>
      <h2>My Inventory</h2>
      <p>Manage your items, track quantities, and keep everything organized.</p>

      <div className="add-item-header">
        <h3>Your Items</h3>

        <button
          className="add-item-button"
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          aria-label={showAddForm ? "Close add item form" : "Add to inventory"}
          aria-expanded={showAddForm}
        >
          {showAddForm ? "−" : "+"}
        </button>
      </div>

      {/* shows the add item form when the + button is clicked */}
      {showAddForm && (
        <ItemForm
          handleAddItem={handleAddItem}
          itemName={itemName}
          setItemName={setItemName}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
        />
      )}

      {message && <p>{message}</p>}

      {/* search bar and sorting dropdown */}
      <InventoryControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* displays the filtered inventory items */}
      {displayedItems.length === 0 ? (
        <p>
          {myItems.length === 0
            ? "Your inventory is looking a little empty. Add your first item!"
            : "No items match your search. Try a different name!"}
        </p>
      ) : (
        <div className="inventory-grid">
          {displayedItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              owner={currentUser?.username}
              getItemDetails={getItemDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyInventory;