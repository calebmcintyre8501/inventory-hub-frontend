import { useEffect, useState } from "react";
import * as api from "../api/inventoryApi";

// moved the inventory state and functions out of App.jsx
// this handles getting, adding, editing, and deleting items
function useInventory(page, setPage, setMessage) {
  const [items, setItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editQuantity, setEditQuantity] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");

  // gets all inventory items when the app loads
  useEffect(() => {
    async function loadItems() {
      try {
        const response = await api.getItems();

        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          setMessage("Couldn't load the inventory. Please try again.");
        }
      } catch (error) {
        console.log(error);
        setMessage("Could not connect to the server.");
      }
    }

    loadItems();
  }, []);

  // gets my items when opening my inventory
  useEffect(() => {
    if (page === "my-items") {
      getMyItems();
    }
  }, [page]);

  // gets the items that belong to the logged in user
  async function getMyItems() {
    try {
      const response = await api.getMyItems();

      if (response.ok) {
        const data = await response.json();
        setMyItems(data);
      } else {
        setMyItems([]);
        setMessage("Please log in to view your inventory.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // updates both inventory lists after changes
  async function refreshInventory() {
    try {
      const response = await api.getItems();

      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        setMessage("Couldn't refresh the inventory. Please try again.");
      }

      await getMyItems();
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // adds a new item
  async function handleAddItem(e) {
    e.preventDefault();

    try {
      const response = await api.addItem(
        itemName,
        itemDescription,
        itemQuantity
      );

      if (response.ok) {
        setItemName("");
        setItemDescription("");
        setItemQuantity(1);
        setShowAddForm(false);

        await refreshInventory();
        setMessage("Item added to your inventory!");
      } else {
        const data = await response.json();
        setMessage(data.error || "Couldn't add your item. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // gets the selected item details
  async function getItemDetails(id) {
    setMessage("");

    try {
      const response = await api.getItem(id);

      if (response.ok) {
        const data = await response.json();
        setSelectedItem(data);
        setPage("item-details");
      } else {
        setMessage("Couldn't load this item. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // copies item information into the edit form
  function startEditing() {
    if (!selectedItem) {
      return;
    }

    setEditName(selectedItem.name);
    setEditDescription(selectedItem.description || "");
    setEditQuantity(selectedItem.quantity);
    setEditing(true);
  }

  // saves an edited item
  async function handleSaveItem(e) {
    e.preventDefault();

    if (!selectedItem) {
      return;
    }

    try {
      const response = await api.updateItem(
        selectedItem.id,
        editName,
        editDescription,
        editQuantity
      );

      if (response.ok) {
        setEditing(false);
        setMessage("Item details updated!");

        await getItemDetails(selectedItem.id);
        await refreshInventory();
      } else {
        const data = await response.json();
        setMessage(data.error || "Couldn't update this item. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // deletes an item
  async function handleDeleteItem() {
    if (!selectedItem) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await api.deleteItem(selectedItem.id);

      if (response.ok) {
        setSelectedItem(null);

        await refreshInventory();
        setMessage("Item removed from your inventory.");
        setPage("my-items");
      } else {
        const data = await response.json();
        setMessage(data.error || "Couldn't remove this item. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // filters items by name and sorts them
  function filterAndSortItems(itemList) {
    return itemList
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "name-asc") {
          return a.name.localeCompare(b.name);
        }

        if (sortBy === "name-desc") {
          return b.name.localeCompare(a.name);
        }

        if (sortBy === "quantity-high") {
          return b.quantity - a.quantity;
        }

        if (sortBy === "quantity-low") {
          return a.quantity - b.quantity;
        }

        return 0;
      });
  }

  // clears inventory information after logging out
  function clearInventory() {
    setMyItems([]);
    setSelectedItem(null);
    setEditing(false);
    setShowAddForm(false);
    setSearchTerm("");
    setSortBy("name-asc");
  }

  return {
    items,
    myItems,
    itemName,
    setItemName,
    itemDescription,
    setItemDescription,
    itemQuantity,
    setItemQuantity,
    selectedItem,
    editing,
    setEditing,
    editName,
    setEditName,
    editDescription,
    setEditDescription,
    editQuantity,
    setEditQuantity,
    showAddForm,
    setShowAddForm,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    handleAddItem,
    getItemDetails,
    startEditing,
    handleSaveItem,
    handleDeleteItem,
    filterAndSortItems,
    clearInventory,
  };
}

export default useInventory;
