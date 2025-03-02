import { useNavigate } from "react-router-dom";
import "./onboarding.css";
function OnboardedPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">You’re All Set!</h1>
      <p className="subtitle">Let’s get started with your journey.</p>
      <button className="button" onClick={() => navigate("/dashboard")}>
        Get Started
      </button>
    </div>
  );
}

export default OnboardedPage;
