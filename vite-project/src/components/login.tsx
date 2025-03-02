import type React from "react";
import { useState, useEffect } from "react";
import { ChromeIcon as Google } from "lucide-react";
import "./login.css";
import NavbarComponent from "./Navbar";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  subject: string;
}

const LoginPage: React.FC = () => {
  const { email, setEmail, password, setPassword, error, handleSubmit } =
    useSignIn();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Mathematics illustration",
      subject: "Mathematics",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Science illustration",
      subject: "Science",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Literature illustration",
      subject: "Literature",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=400",
      alt: "History illustration",
      subject: "History",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Art illustration",
      subject: "Art",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavbarComponent />
      <div className="login-container">
        {/* Left side - Image carousel */}
        <div className="carousel-container">
          <div className="carousel-content">
            <div className="carousel-images">
              {carouselImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`carousel-image ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                  <div className="carousel-caption">
                    <h3>{image.subject}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-quote">
              <div className="quote-bubble">
                <p>Read with Purpose,</p>
                <p>Analyze with Confidence,</p>
                <p>and Excel in Every Subject.</p>
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="login-form-container">
          <div className="signup-prompt">
            <span>Don't have an account?</span>
            <button className="signup-link" onClick={() => navigate("/signup")}>
              sign up
            </button>
          </div>

          <div className="login-form">
            <h2>Sign in</h2>

            <div className="google-signin">
              <p>Sign in with Google account</p>
              <button className="google-button">
                <Google size={20} />
                <span>Google</span>
              </button>
            </div>

            <div className="divider">
              <span>Or connect with email address</span>
            </div>

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              <button type="submit" className="signin-button">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
