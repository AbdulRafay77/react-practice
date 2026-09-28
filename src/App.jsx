// import { useState } from "react";
// import { useEffect } from "react";

// // function UserCard({ name, age, role, location }) {
// //   const message = "Hello";

// //   return (
// //     <div>
// //       <h2>{message} {name}</h2>
// //       <p>Age: {age}</p>
// //       <p>Role: {role}</p>
// //       <p>Location: {location}</p>
// //     </div>
// //   );
// // }

// function App() {
// //   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
// //   // const [products, setProducts] = useState([]);

// //   // useEffect(() => {
// //   //   async function loadProducts() {
// //   //     const data = [
// //         //   { id: 1, name: "Laptop", price: 1000 },
// //         //   { id: 2, name: "Phone", price: 500 },
// //         //   { id: 3, name: "Mouse", price: 50 }
// //         // ];
// //         // setProducts(data);
// //   //   }

// //   //   loadProducts();
// //   // }, [])

// //   // return(
// //   //   <div>
// //   //     {products.map(product => (
// //   //       <p key={product._id}>{product.name}</p>
// //   //     ))}
// //   //   </div>
// //   // )

// //   const user1 = {
// //     name: "Rafay",
// //     age: 25,
// //     role: "Software Engineer",
// //     location: "Karachi"
// //   };

// //   const user2 = {
// //     name: "Ali",
// //     age: 24,
// //     role: "Frontend Developer",
// //     location: "Lahore"
// //   };
// // // event practice
// //   // function handleClick(event) {
// //   //   console.log(event.target.value);
// //   // }
// //   // input event practice
// //   // function handleChange(event) {
// //   //   console.log(event.target.value);
// //   // }
// //   function handleChange(event) {
// //     setName(event.target.value);
// //   }

// //   // const products = ["Laptop", "Phone", "Mouse"];
// //   const products = [
// //     { id: 1, name: "Laptop", price: 1000 },
// //     { id: 2, name: "Phone", price: 500 },
// //     { id: 3, name: "Mouse", price: 50 }
// //   ];

// //   function ProductList({ products }){
// //     if(products.length ===0){
// //       return <p>No products found.</p>
// //     }
// //   }

// //   const loading = true;

// //   useEffect(() => {
// //     console.log("Count Changed");
// //   }, [count]);


//   return (
// //     <div>
// //       <UserCard {...user1}/>
// //       <UserCard {...user2}/>

// //       <p>{count}</p>

// //       <button onClick={() => setCount(count + 1)}>
// //         Increase
// //       </button>
// //       <button onClick={() => setCount(count - 1)}>
// //         Decrease
// //       </button>
// //       {/* event practice */}
// //       {/* <button onClick={handleClick}>
// //         Click
// //       </button> */}
// //       {/* input event practice */}
// //       {/* <input onChange={handleChange}/> */}
// //       <input onChange={handleChange} />

// //       <p>Hello {name}</p>

// //       {/* {products.map(product => (
// //         <p>{product}</p>
// //       ))} */}
// //       <ProductList products={products} />
// //       {products.map(product => (
// //         <div key={product.id}>
// //           <h2>{product.name}</h2>
// //           <p>${product.price}</p>
// //         </div>
// //       ))}

// //       {loading ? (
// //         <p>loading...</p>
// //       ) : (
// //         <p>Product loaded</p>
// //       )}

// //       <h1>Hello</h1>

// //       <input type="text" />

// //     </div>
//     <div>
//       <input 
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />

//       <p>hello {name}</p>
//     </div>
    
//   );
// }

// export default App;


import { useState } from "react";

function App(){
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function handleChange(event){
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(){
    event.preventDefault();

    console.log(formData.email);
    console.log(formData.password);
  }

  return(
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input 
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form> */}
      
      <form onSubmit={handleSubmit}>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input 
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
      
    </div>
  )
}

export default App;