import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [ifNotSaved, setIfNotSaved] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    if (storedUser) {
      setFormData(storedUser);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      if (ifNotSaved) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Do you really want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [ifNotSaved]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIfNotSaved(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setIfNotSaved(false);
    alert("User data saved successfully!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">User ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Save Data
        </button>
      </form>
    </div>
  );
};

export default UserForm;
