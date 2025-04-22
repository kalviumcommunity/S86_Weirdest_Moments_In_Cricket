import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboardpage = () => {
  const [moments, setMoments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    media: "",
    user: "",
  });

  const categories = [
    "All",
    "Funniest Run-outs",
    "Weirdest Catches",
    "Unexpected Umpire Decisions",
  ];

  useEffect(() => {
    fetchMoments();
  }, []);

  const fetchMoments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/moments");
      setMoments(res.data);
    } catch (err) {
      console.error("Error fetching moments:", err);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      category: selectedCategory,
    };

    try {
      await axios.post("http://localhost:5000/api/moments", payload);
      fetchMoments(); // Refresh the moments
      setFormData({ title: "", description: "", category: "", media: "", user: "" }); // Reset form
    } catch (err) {
      console.error("Error uploading moment:", err);
    }
  };

  const filteredMoments = selectedCategory === "All"
    ? moments
    : moments.filter(moment => moment.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
        Dashboard
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mb-8 space-x-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-yellow-600 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Upload Form */}
      {selectedCategory !== "All" && (
        <div className="max-w-3xl mx-auto mb-12 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Add a New Moment in {selectedCategory}
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleFormChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleFormChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              name="media"
              placeholder="YouTube or Image URL"
              value={formData.media}
              onChange={handleFormChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              name="user"
              placeholder="Your name or nickname"
              value={formData.user}
              onChange={handleFormChange}
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
      )}

      {/* Moments Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMoments.map((moment) => (
          <div
            key={moment._id}
            className="bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {moment.title}
            </h3>
            <p className="text-gray-300">{moment.description}</p>
            {moment.media && (
              <div className="mt-2">
                {moment.media.includes("youtube") ? (
                  <iframe
                    className="w-full aspect-video rounded-lg mt-2"
                    src={moment.media}
                    title="Moment video"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={moment.media}
                    alt="Moment media"
                    className="w-full rounded-lg mt-2"
                  />
                )}
              </div>
            )}
            <p className="text-sm text-gray-400 mt-2 italic">
              Category: {moment.category}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">by {moment.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboardpage;
