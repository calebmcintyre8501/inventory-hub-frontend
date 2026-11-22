// this was originally in App.jsx lines 491-554
// this page handles viewing an item and the edit/delete buttons
function ItemDetails({
  selectedItem,
  currentUser,
  editing,
  setEditing,
  editName,
  setEditName,
  editDescription,
  setEditDescription,
  editQuantity,
  setEditQuantity,
  handleSaveItem,
  startEditing,
  handleDeleteItem,
  changePage,
  message,
}) {
  return (
    <div>
      <h2>Item Overview</h2>
      <p>View item information and manage your inventory.</p>

      {editing ? (
        <form onSubmit={handleSaveItem}>
          <h3>Edit Item Details</h3>

          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            required
          />

          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />

          <input
            type="number"
            value={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
            min="0"
            step="1"
            required
          />

          <button type="submit">Save Changes</button>

          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="item-card">
          <h3>{selectedItem.name}</h3>
          <p>Added by: {selectedItem.username}</p>
          <p>Description: {selectedItem.description || "No description provided."}</p>
          <p>In Stock: {selectedItem.quantity}</p>

          {currentUser && currentUser.id === selectedItem.user_id && (
            <div>
              <button onClick={startEditing}>Edit Details</button>
              <button onClick={handleDeleteItem}>Remove Item</button>
            </div>
          )}
        </div>
      )}

      {message && <p>{message}</p>}

      <div className="detail-buttons">
        <button onClick={() => changePage("home")}>
          Back to Inventory
        </button>

        {currentUser && (
          <button onClick={() => changePage("my-items")}>
            Back to My Inventory
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;