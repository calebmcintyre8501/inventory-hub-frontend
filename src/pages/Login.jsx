 // this was originally in App.jsx lines 424-450
 // login page was moved out so App.jsx isnt full of forms
 function Login({
   loginEmail,
   setLoginEmail,
   loginPassword,
   setLoginPassword,
   handleLogin,
   message,
 }) {
   return (
     <div>
       <h2>Welcome Back!</h2>
       <p>Sign in to manage your inventory and keep everything organized.</p>

       <form onSubmit={handleLogin}>
         <input
           type="email"
           placeholder="Email address"
           value={loginEmail}
           onChange={(e) => setLoginEmail(e.target.value)}
           required
         />

         <input
           type="password"
           placeholder="Enter your password"
           value={loginPassword}
           onChange={(e) => setLoginPassword(e.target.value)}
           required
         />

         <button type="submit">Sign In</button>
       </form>

       {message && <p>{message}</p>}
     </div>
   );
 }

 export default Login;