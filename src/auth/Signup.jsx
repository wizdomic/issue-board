import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ hook to navigate

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Create user
      await createUserWithEmailAndPassword(auth, email.trim(), password.trim());

      // 2️⃣ Firebase automatically logs in newly created user
      alert("Signup successful!");

      // 3️⃣ Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}
