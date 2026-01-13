import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Smart Issue Board</h1>
      <p>Please choose an option to continue:</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/signup">
          <button style={{ marginRight: "20px", padding: "10px 20px" }}>Signup</button>
        </Link>
        <Link to="/login">
          <button style={{ padding: "10px 20px" }}>Login</button>
        </Link>
      </div>
    </div>
  );
}
