import React, { useState } from 'react';
import githubService from './githubService';  // Import the service file

const SearchComponent = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]); // Store the results here

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    // Call the service to search users with the input data
    const searchResults = await githubService.searchUsers({ username, location, minRepos });

    // Update state with the search results
    setResults(searchResults);
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub Username"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min Repositories"
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Display Results */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-bold">Search Results:</h2>
          <ul>
            {results.map((user) => (
              <li key={user.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">{user.login}</h3>
                <p className="text-gray-400">Location: {user.location || 'Not available'}</p>
                <p className="text-gray-400">Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
