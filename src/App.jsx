import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllItems from "./pages/AllItems";
import MyInventory from "./pages/MyInventory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItemDetails from "./pages/ItemDetails";
import useAuth from "./hooks/useAuth";
import useInventory from "./hooks/useInventory";

// App connects the pages and handles navigation
// login functions are in useAuth and inventory functions are in useInventory
function App() {
  const [page, setPage] = useState("home");

  const {
    currentUser,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    message,
    setMessage,
    handleRegister,
    handleLogin,
    handleLogout,
    firstName,
    setFirstName,
    lastName,
    setLastName
  } = useAuth();

  const {
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
  } = useInventory(page, setPage, setMessage);

  // changes pages and clears old messages
  function changePage(nextPage) {
    setMessage("");
    setEditing(false);
    setPage(nextPage);
  }

  // logs in and goes to my inventory
  async function loginAndNavigate(e) {
    const success = await handleLogin(e);

    if (success) {
      setPage("my-items");
    }
  }

  // logs out and clears inventory information
  async function logoutAndNavigate() {
    const success = await handleLogout();

    if (success) {
      clearInventory();
      setPage("home");
    }
  }

  return (
    <div>
      <Header
        currentUser={currentUser}
        changePage={changePage}
        handleLogout={logoutAndNavigate}
      />

      <main>
        {page === "home" && (
          <AllItems
            items={items}
            getItemDetails={getItemDetails}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterAndSortItems={filterAndSortItems}
          />
        )}

        {page === "my-items" && (
          <MyInventory
            myItems={myItems}
            currentUser={currentUser}
            message={message}
            getItemDetails={getItemDetails}
            showAddForm={showAddForm}
            setShowAddForm={setShowAddForm}
            handleAddItem={handleAddItem}
            itemName={itemName}
            setItemName={setItemName}
            itemDescription={itemDescription}
            setItemDescription={setItemDescription}
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterAndSortItems={filterAndSortItems}
          />
        )}

        {page === "login" && (
          <Login
            loginEmail={loginEmail}
            setLoginEmail={setLoginEmail}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
            handleLogin={loginAndNavigate}
            message={message}
          />
        )}

        {page === "register" && (
          <Register
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleRegister={handleRegister}
            message={message}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
        )}

        {page === "item-details" && selectedItem && (
          <ItemDetails
            selectedItem={selectedItem}
            currentUser={currentUser}
            editing={editing}
            setEditing={setEditing}
            editName={editName}
            setEditName={setEditName}
            editDescription={editDescription}
            setEditDescription={setEditDescription}
            editQuantity={editQuantity}
            setEditQuantity={setEditQuantity}
            handleSaveItem={handleSaveItem}
            startEditing={startEditing}
            handleDeleteItem={handleDeleteItem}
            changePage={changePage}
            message={message}
          />
        )}
      </main>
    </div>
  );
}

export default App;
