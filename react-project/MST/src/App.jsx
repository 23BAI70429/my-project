import React, { useState } from "react";

const playersData = [
  { id: 1, name: "Virat Kohli", role: "Batsman" },
  { id: 2, name: "MS Dhoni", role: "Wicketkeeper" },
  { id: 3, name: "Rohit Sharma", role: "Batsman" },
  { id: 4, name: "Jasprit Bumrah", role: "Bowler" },
  { id: 5, name: "Hardik Pandya", role: "All-rounder" },
];

function App() {
  const [search, setSearch] = useState("");

  // Filter players based on role
  const filteredPlayers = playersData.filter((player) =>
    player.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Player List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded-md mb-4"
      />

      {/* Display Filtered Players */}
      <ul className="space-y-2">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <li
              key={player.id}
              className="p-3 border rounded-lg shadow-sm hover:bg-gray-50"
            >
              <p>
                <span className="font-semibold">ID:</span> {player.id}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {player.name}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {player.role}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No players found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
