import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4">Simple Form</h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          className="border p-2 w-full rounded-md mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          className="border p-2 w-full rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
