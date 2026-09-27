import { useState } from "react";

function UserCard({ name, age, role, location }) {
  const message = "Hello";

  return (
    <div>
      <h2>{message} {name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const user1 = {
    name: "Rafay",
    age: 25,
    role: "Software Engineer",
    location: "Karachi"
  };

  const user2 = {
    name: "Ali",
    age: 24,
    role: "Frontend Developer",
    location: "Lahore"
  };
// event practice
  // function handleClick(event) {
  //   console.log(event.target.value);
  // }
  // input event practice
  // function handleChange(event) {
  //   console.log(event.target.value);
  // }
  function handleChange(event) {
    setName(event.target.value);
  }

  const products = ["Laptop", "Phone", "Mouse"];

  return (
    <div>
      <UserCard {...user1}/>
      <UserCard {...user2}/>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      {/* event practice */}
      {/* <button onClick={handleClick}>
        Click
      </button> */}
      {/* input event practice */}
      {/* <input onChange={handleChange}/> */}
      <input onChange={handleChange} />

      <p>Hello {name}</p>

      {products.map(product => (
        <p>{product}</p>
      ))}
    </div>
  );
}

export default App;