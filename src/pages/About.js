import React, { useEffect } from "react";
import "../styles/About.css";
import { Abstract } from "../components/Abstract";
import awsbadge from "../assets/awsbadge.jpg";
import certPDF from "../assets/awscert.pdf";
import Course from "../components/Course";
import { CourseList } from "../components/CourseList";
import { IDEList } from "../components/IDEList";
import IDE from "../components/IDE";
import { LanguageList } from "../components/LanguageList";
import Language from "../components/Language";
import degreePDF from "../assets/degree.pdf";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="summary">
        <div className="abstract">
          <p>{Abstract}</p>
          <a href={degreePDF} target="_blank" rel="noreferrer">
            Click To Verify Degree
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills & Certifications</h2>
        <h3>Certifications</h3>
        <img src={awsbadge} alt="AWS Cloud Practioner" />
        <a href={certPDF} target="_blank" rel="noreferrer">
          Click To Validate
        </a>
        <h3>Languages</h3>
        <ol className="languages">
          {LanguageList.map((language) => {
            return (
              <Language
                name={language.name}
                image={language.image}
                years={language.years}
              />
            );
          })}
        </ol>
        <h3>IDEs, Environments, Libraries & Frameworks</h3>
        <ol className="ides">
          {IDEList.map((ide) => {
            return <IDE name={ide.name} image={ide.image} />;
          })}
        </ol>
      </div>
      <div className="relevantcourses">
        <h2>Relevant Courses</h2>
        <div className="container">
          {CourseList.map((course) => {
            return (
              <Course
                name={course.name}
                image={course.image}
                topics={course.topics}
                sourcecode={course.sourcecode}
              />
            );
          })}
        </div>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
}

export default About;
