"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Progress } from "./progress";
import { Checkbox } from "./Checkbox";
import { Button } from "./lessonButton";

// Define types for our course data
type Topic = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type CourseSection = {
  id: string;
  title: string;
  topics: Topic[];
  expanded: boolean;
  progress: number;
};

export default function CourseProgress() {
  // Initial course data
  const [courseSections, setCourseSections] = useState<CourseSection[]>([
    {
      id: "basic-arithmetic",
      title: "Basic Arithmetic",
      expanded: true,
      progress: 50,
      topics: [
        {
          id: "addition-subtraction",
          title: "Addition, subtraction, multiplication, and division",
          description:
            "The four fundamental operations of arithmetic used to solve basic numerical problems.",
          completed: true,
        },
        {
          id: "order-of-operations",
          title: "Order of operations (PEMDAS)",
          description:
            "A set of rules that determines the correct sequence to perform mathematical operations in expressions.",
          completed: true,
        },
        {
          id: "fractions-decimals",
          title: "Fractions, decimals, and percentages",
          description:
            "Different ways of representing parts of a whole, essential for comparing and converting numerical values.",
          completed: true,
        },
      ],
    },
  ]);

  // Additional sections that will be shown when expanded
  const [additionalSections, setAdditionalSections] = useState<CourseSection[]>(
    [
      {
        id: "algebra-basics",
        title: "Algebra Basics",
        expanded: false,
        progress: 20,
        topics: [
          {
            id: "variables-expressions",
            title: "Variables and expressions",
            description:
              "Using letters to represent unknown values in mathematical expressions.",
            completed: true,
          },
          {
            id: "equations",
            title: "Solving simple equations",
            description:
              "Finding the value of an unknown variable in an equation.",
            completed: false,
          },
          {
            id: "inequalities",
            title: "Inequalities",
            description:
              "Mathematical statements that compare expressions using inequality symbols.",
            completed: false,
          },
        ],
      },
      {
        id: "geometry-basics",
        title: "Geometry Basics",
        expanded: false,
        progress: 0,
        topics: [
          {
            id: "shapes",
            title: "Basic shapes and properties",
            description:
              "Understanding points, lines, angles, and common 2D shapes.",
            completed: false,
          },
          {
            id: "area-perimeter",
            title: "Area and perimeter",
            description:
              "Calculating the area and perimeter of various geometric shapes.",
            completed: false,
          },
          {
            id: "volume",
            title: "Volume and surface area",
            description:
              "Measuring three-dimensional objects and their surfaces.",
            completed: false,
          },
        ],
      },
    ]
  );

  const [expanded, setExpanded] = useState(false);

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setCourseSections((sections) =>
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );

    setAdditionalSections((sections) =>
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );
  };

  // Toggle topic completion
  const toggleTopicCompletion = (sectionId: string, topicId: string) => {
    // Check if the section is in the main sections
    let sectionFound = false;

    // Update main sections if found
    setCourseSections((sections) => {
      const updatedSections = sections.map((section) => {
        if (section.id === sectionId) {
          sectionFound = true;
          const updatedTopics = section.topics.map((topic) =>
            topic.id === topicId
              ? { ...topic, completed: !topic.completed }
              : topic
          );

          // Calculate new progress
          const completedCount = updatedTopics.filter(
            (t) => t.completed
          ).length;
          const newProgress = Math.round(
            (completedCount / updatedTopics.length) * 100
          );

          return {
            ...section,
            topics: updatedTopics,
            progress: newProgress,
          };
        }
        return section;
      });

      return updatedSections;
    });

    // If not found in main sections, check additional sections
    if (!sectionFound) {
      setAdditionalSections((sections) => {
        const updatedSections = sections.map((section) => {
          if (section.id === sectionId) {
            const updatedTopics = section.topics.map((topic) =>
              topic.id === topicId
                ? { ...topic, completed: !topic.completed }
                : topic
            );

            // Calculate new progress
            const completedCount = updatedTopics.filter(
              (t) => t.completed
            ).length;
            const newProgress = Math.round(
              (completedCount / updatedTopics.length) * 100
            );

            return {
              ...section,
              topics: updatedTopics,
              progress: newProgress,
            };
          }
          return section;
        });

        return updatedSections;
      });
    }
  };

  // Toggle expand all sections
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Add a new topic to a section
  const addNewTopic = (sectionId: string) => {
    const newTopic: Topic = {
      id: `new-topic-${Date.now()}`,
      title: "New Topic",
      description: "Click to edit this topic description.",
      completed: false,
    };

    // Check if the section is in the main sections
    let sectionFound = false;

    // Update main sections if found
    setCourseSections((sections) => {
      const updatedSections = sections.map((section) => {
        if (section.id === sectionId) {
          sectionFound = true;
          return {
            ...section,
            topics: [...section.topics, newTopic],
          };
        }
        return section;
      });

      return updatedSections;
    });

    // If not found in main sections, check additional sections
    if (!sectionFound) {
      setAdditionalSections((sections) => {
        const updatedSections = sections.map((section) => {
          if (section.id === sectionId) {
            return {
              ...section,
              topics: [...section.topics, newTopic],
            };
          }
          return section;
        });

        return updatedSections;
      });
    }
  };

  // Render a section
  const renderSection = (section: CourseSection) => (
    <div key={section.id} className="border-b border-gray-300">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => toggleSection(section.id)}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium">{section.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-64 hidden md:block">
            <Progress
              value={section.progress}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-[#0a4d3c]"
            />
          </div>
          <div className="flex gap-1">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-6 w-0.5 ${
                    i < section.progress / 10 ? "bg-[#0a4d3c]" : "bg-gray-300"
                  }`}
                />
              ))}
          </div>
          {section.expanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>

      {section.expanded && (
        <div className="px-4 pb-2">
          {section.topics.map((topic) => (
            <div
              key={topic.id}
              className="flex items-start border-t border-gray-100 py-3 hover:bg-gray-50"
            >
              <div className="pt-0.5 pr-3">
                <Checkbox
                  checked={topic.completed}
                  onCheckedChange={() =>
                    toggleTopicCompletion(section.id, topic.id)
                  }
                  className={`h-5 w-5 rounded ${
                    topic.completed
                      ? "bg-[#0a4d3c] border-[#0a4d3c]"
                      : "border-gray-300"
                  }`}
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-sm font-medium">{topic.title}</span>
                  <span className="text-sm text-gray-600 md:text-right">
                    {topic.description}
                  </span>
                </div>
              </div>
              <div className="pl-2">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}

          {/* Add new topic button */}
          <div className="flex justify-end py-2">
            <Button
              variant="outline"
              size="sm"
              className="text-[#0a4d3c] border-[#0a4d3c] hover:bg-[#0a4d3c]/10"
              onClick={(e) => {
                e.stopPropagation();
                addNewTopic(section.id);
              }}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Topic
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-[#f8f7f2] rounded-lg">
      <h1 className="text-2xl font-bold text-[#0a4d3c] mb-6">
        Course Progress
      </h1>

      <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
        <div className="border-b border-gray-300 p-4 bg-[#f8f7f2]">
          <h2 className="text-lg font-semibold text-[#0a4d3c]">
            Beginner Math Courses
          </h2>
        </div>

        {/* Render main sections */}
        {courseSections.map(renderSection)}

        {/* Render additional sections if expanded */}
        {expanded && additionalSections.map(renderSection)}

        {/* Expand button */}
        <div className="p-2 flex justify-center border-t border-gray-100">
          <Button
            variant="ghost"
            className="flex items-center gap-1 text-sm text-[#0a4d3c] font-medium px-4 py-1 rounded hover:bg-gray-100"
            onClick={toggleExpand}
          >
            {expanded ? "Collapse" : "Expand"}
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
