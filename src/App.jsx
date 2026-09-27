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

  return (
    <div>
      <UserCard
        name={user1.name}
        age={user1.age}
        role={user1.role}
        location={user1.location}
      />

      <UserCard
        name={user2.name}
        age={user2.age}
        role={user2.role}
        location={user2.location}
      />
    </div>
  );
}

export default App;