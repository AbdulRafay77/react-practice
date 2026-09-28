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
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default App;