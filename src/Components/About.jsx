import React from 'react';


function About(){

    const Products=[
         { id: 1, name: "Product 1", price: "₹199" },
    { id: 2, name: "Product 2", price: "₹299" },
    { id: 3, name: "Product 3", price: "₹399" },
    { id: 4, name: "Product 4", price: "₹499" },
    { id: 5, name: "Product 5", price: "₹599" },
    { id: 6, name: "Product 6", price: "₹699" },
    { id: 7, name: "Product 7", price: "₹799" },
    { id: 8, name: "Product 8", price: "₹899" },
    { id: 9, name: "Product 9", price: "₹999" },
    { id: 10, name: "Product 10", price: "₹1099" },
    { id: 11, name: "Product 11", price: "₹1199" },
    { id: 12, name: "Product 12", price: "₹1299" },
    { id: 13, name: "Product 13", price: "₹1399" },
    { id: 14, name: "Product 14", price: "₹1499" },
    { id: 15, name: "Product 15", price: "₹1599" },
    { id: 16, name: "Product 16", price: "₹1699" },
    { id: 17, name: "Product 17", price: "₹1799" },
    { id: 18, name: "Product 18", price: "₹1899" },
    { id: 19, name: "Product 19", price: "₹1999" },
    { id: 20, name: "Product 20", price: "₹2099" },
    ]


    
  return (
    <div style={{ padding: 20 }}>
      <h2>20 Products</h2>

      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {Products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={`https://picsum.photos/200?random=${item.id}`}
              alt="product"
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3 style={{ marginTop: 10 }}>{item.name}</h3>
            <p style={{ color: "gray" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;