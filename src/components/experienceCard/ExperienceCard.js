import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;

    const accentColor =
      experience["color"] || theme.imageHighlight || "#607d8b";

    return (
      <div className="experience-list-item">
        {/* Company Logo */}
        <Fade left duration={1200} distance="30px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt={experience["company"] || experience["organization"] || ""}
            />
          </div>
        </Fade>

        {/* Timeline Stepper */}
        <div className="experience-card-stepper">
          <div
            className="stepper-dot"
            style={{ backgroundColor: accentColor }}
          />
          {index !== totalCards - 1 && (
            <div
              className="stepper-line"
              style={{
                background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}33)`,
              }}
            />
          )}
        </div>

        {/* Card */}
        <Fade right duration={1200} distance="30px">
          <div
            className="experience-card"
            style={{ background: `${theme.highlight}18` }}
          >
            {/* Coloured left accent bar */}
            <div
              className="experience-card-accent"
              style={{ background: accentColor }}
            />

            {/* Header */}
            <div className="experience-card-header">
              <div className="experience-card-header-left">
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
                <p
                  className="experience-card-company"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["company_url"] ? (
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.imageHighlight }}
                    >
                      {experience["company"] || experience["organization"]}
                    </a>
                  ) : (
                    experience["company"] || experience["organization"]
                  )}
                </p>
              </div>

              <div className="experience-card-header-right">
                {experience["duration"] && (
                  <p
                    className="experience-card-duration"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["duration"]}
                  </p>
                )}
                {experience["location"] && (
                  <p
                    className="experience-card-location"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["location"]}
                  </p>
                )}
              </div>
            </div>

            {/* Divider + Description */}
            {experience["description"] && (
              <>
                <div className="experience-card-divider" />
                <p
                  className="experience-card-description"
                  style={{ color: theme.text }}
                >
                  {experience["description"]}
                </p>
              </>
            )}
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
