import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const topics = [
  "Tech",
  "Health",
  "Sports",
  "Music",
  "Art",
  "Travel",
  "Science",
  "Gaming",
  "Problem Solving",
  "Fiction",
  "Statistics & Probability",
  "Algebra",
  "Ecology",
  "Geometry",
];

function Onboarding() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 5) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const progress = (selectedTopics.length / 5) * 100;

  return (
    <div className="container">
      <p className="subtitle">
        Select 5 topics you're interested in to get started.
      </p>
      <div className="grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic-button ${
              selectedTopics.includes(topic)
                ? "selected"
                : selectedTopics.length === 5
                ? "disabled"
                : "enabled"
            }`}
            onClick={() => handleSelect(topic)}
          >
            {topic}
          </div>
        ))}
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-center mt-2">{selectedTopics.length} of 5 selected</p>

      <div
        className={`create-button ${
          selectedTopics.length === 5 ? "enabled" : "disabled"
        }`}
        onClick={() => navigate("/onboarded")}
      >
        Create
      </div>
    </div>
  );
}

export default Onboarding;
