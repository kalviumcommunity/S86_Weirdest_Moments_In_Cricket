import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadMomentPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    media: "",
    user: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/moments", formData);
      navigate("/dashboard"); // Redirect to Dashboard page after successful upload
    } catch (err) {
      console.error("Error uploading moment:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
        Upload a New Moment
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Add a New Moment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          >
            <option value="">Select Category</option>
            <option value="Funniest Run-outs">Funniest Run-outs</option>
            <option value="Weirdest Catches">Weirdest Catches</option>
            <option value="Unexpected Umpire Decisions">Unexpected Umpire Decisions</option>
          </select>
          <input
            type="text"
            name="media"
            placeholder="YouTube or Image URL"
            value={formData.media}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="user"
            placeholder="Your name or nickname"
            value={formData.user}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded"
          >
            Submit Moment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadMomentPage;
