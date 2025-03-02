import type React from "react";
import type { Lesson } from "../../types/userTypes";
import "./LessonBox.css";

interface LessonBoxProps {
  lesson: Lesson;
  views?: string;
  updatedTime?: string;
  channel?: string;
}

const LessonBox: React.FC<LessonBoxProps> = ({
  lesson,
  views = "100K",
  updatedTime = "1 week ago",
  channel = "Learning Channel",
}) => {
  return (
    <div className="lesson-box">
      <div className="lesson-thumbnail"></div>
      <div className="lesson-info">
        <h4 className="lesson-title">{lesson.title}</h4>
        <div className="lesson-meta">
          <span className="views">{views} views</span>
          <span className="update-time">Updated {updatedTime}</span>
        </div>
        <div className="channel">
          <div className="channel-icon"></div>
          <span className="channel-name">{channel}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonBox;
