"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Recherche lancée pour : ${query}`);
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3">
      <input
        type="text"
        placeholder="Rechercher un emploi, un mot-clé..."
        className="w-80 md:w-96 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Rechercher
      </button>
    </div>
  );
}
