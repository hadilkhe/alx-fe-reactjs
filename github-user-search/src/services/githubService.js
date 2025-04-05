// githubService.js

const searchUsers = async ({ username, location, minRepos }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);
    
    const queryString = query.join(' ');
  
    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);
    const data = await response.json();
  
    return data.items || [];
  };
  
  export default { searchUsers };
  