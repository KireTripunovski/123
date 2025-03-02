import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // Step 1: Create the user
      const response = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password_hash: `hash${password}`,
          profile_picture: null, // Default if needed
          role_id: 3, // Default role_id for new users
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const userData = await response.json();

      // Step 2: Create corresponding student data for the new user
      const studentDataResponse = await fetch(
        "http://localhost:3002/students_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userData.id, // Assign the new user ID
            gender: "", // You can customize this field
            birth_date: "", // Customize this field
            school_year: "", // Customize this field
            field_of_study: "", // Customize this field
            current_school: "", // Customize this field
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }),
        }
      );

      if (!studentDataResponse.ok) {
        throw new Error("Failed to create student data");
      }

      setSuccess(true);
      setTimeout(() => navigate("/onboarding"), 2000);
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      {success && (
        <p className="success-message">Signup successful! Redirecting...</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          onClick={() => navigate("/onboarding")}
          type="submit"
          className="signup-button"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
