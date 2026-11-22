// this was originally in App.jsx lines 279-297
// moved the header here to keep the main page cleaner
function Header({ currentUser, changePage, handleLogout }) {
  return (
    <header>
      <h1>Inventory Hub</h1>
      <nav>
        <button onClick={() => changePage("home")}>Browse Inventory</button>
        {currentUser ? (
          <>
            <button onClick={() => changePage("my-items")}>My Inventory</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => changePage("login")}>Login</button>
            <button onClick={() => changePage("register")}>Register</button>
          </>
        )}
      </nav>
    </header>
  );
}
export default Header;