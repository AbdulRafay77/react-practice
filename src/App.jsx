import { useState } from "react";

function App(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(event){
    event.preventDefault();

    console.log(email);
    console.log(password);
  }
  return(
    <form onSubmit={handleSubmit}>
      <p>Email:</p>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Password:</p>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default App;