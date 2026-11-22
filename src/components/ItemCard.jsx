// this was originally in App.jsx lines 308-331 and 398-417
// both inventory pages were using the same card so now they share this
function ItemCard({ item, owner, getItemDetails }) {
  return (
    <div
      className="item-card"
      onClick={() => getItemDetails(item.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="item-card-top">
        <h3 className="item-name">{item.name}</h3>
        <span className="quantity-badge">In Stock: {item.quantity}</span>
      </div>

      <p>Added by: {owner || item.username}</p>

      <p>
        {item.description
          ? item.description.length > 100
            ? item.description.slice(0, 100) + "..."
            : item.description
          : "No description provided."}
      </p>
    </div>
  );
}

export default ItemCard;