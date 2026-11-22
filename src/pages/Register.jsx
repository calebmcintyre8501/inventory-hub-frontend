 // this was originally in App.jsx lines 453-488
 // moved the register form into its own page
 function Register({
   username,
   setUsername,
   email,
   setEmail,
   password,
   setPassword,
   handleRegister,
   message,
   firstName,
   setFirstName,
   lastName,
   setLastName
 }) {
   return (
     <div>
       <h2>Join Inventory Hub</h2>
       <p>Create your account and start managing your inventory.</p>

       <form onSubmit={handleRegister}>
         <input
           type="text"
           placeholder="Choose a username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required
         />

         <input
           type="text"
           placeholder="First Name"
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
           required
         />

         <input
           type="text"
           placeholder="Last Name"
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
           required
         />

         <input
           type="email"
           placeholder="Email address"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />

         <input
           type="password"
           placeholder="Create a password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />

         <button type="submit">Create Account</button>
       </form>

       {message && <p>{message}</p>}
     </div>
   );
 }

 export default Register;