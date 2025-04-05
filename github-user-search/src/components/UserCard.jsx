function UserCard({ user }) {
    if (!user) return null;
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
        <img src={user.avatar_url} alt={user.login} width={100} />
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
      </div>
    );
  }
  
  export default UserCard;
  