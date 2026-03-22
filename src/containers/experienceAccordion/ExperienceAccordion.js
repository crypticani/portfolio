import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

const SECTION_ICONS = {
  Work: "💼",
  Internships: "🚀",
  Volunteerships: "🤝",
};

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          const icon = SECTION_ICONS[section["title"]] || "🏷️";
          return (
            <div key={section["title"]} style={{ marginBottom: 48 }}>
              {/* Section label */}
              <div
                className="experience-section-label"
                style={{ color: theme.text }}
              >
                <span style={{ fontSize: 18 }}>{icon}</span>
                <span
                  className="experience-section-label-text"
                  style={{ color: theme.text }}
                >
                  {section["title"]}
                </span>
                <div
                  className="experience-section-label-line"
                  style={{ background: theme.text }}
                />
              </div>

              {/* Experience cards */}
              {section["experiences"].map((experience, index) => (
                <ExperienceCard
                  key={`${section["title"]}-${index}`}
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
