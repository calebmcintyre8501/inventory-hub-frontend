// this was originally in App.jsx lines 358-388
// this is the add item form that opens when the + is clicked
function ItemForm({
  handleAddItem,
  itemName,
  setItemName,
  itemDescription,
  setItemDescription,
  itemQuantity,
  setItemQuantity,
}) {
  return (
    <form onSubmit={handleAddItem}>
      <h3>Add to Inventory</h3>

      <input
        type="text"
        placeholder="What are you adding?"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />

      <textarea
        placeholder="Add a description (optional)"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        min="0"
        step="1"
        required
      />

      <button type="submit">Create Item</button>
    </form>
  );
}

export default ItemForm;