import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Validate name field
  const isValidName = (name: string): boolean => {
    const regex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    return regex.test(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate all fields
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Validate name format
    if (!isValidName(name)) {
      setError("Name should only contain letters and spaces.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password_hash: `hash${password}`,
          profile_picture: null,
          role_id: 3,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const userData = await response.json();

      const studentDataResponse = await fetch(
        "http://localhost:3002/students_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userData.id,
            gender: "",
            birth_date: "",
            school_year: "",
            field_of_study: "",
            current_school: "",
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
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
