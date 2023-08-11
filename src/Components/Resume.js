import React from "react";
import StateManagement from "./Statemanagement";


// const Resume = () => {
//     return(
//         <div>
//             <div><StateManagement/></div>
//             <h2>You can find my Resume here</h2>
//         </div>
//     )
// };

// export default Resume;


const Resume = () => {
    const education = [
      {
        degree: 'B.Tech in Artifical Intellingence and Data Science',
        school: 'Kumaraguru College Of Technology',
        year: '2025'
      },
      {
        degree: 'HSC',
        school: 'Holy Cross School, Salem',
        year: '2021'
      },
      {
        degree: "SSLC",
        school: 'Holy Cross School, Salem',
        year: '2019'
      }
    ];
  
    const skills = ['Machine learning', 'Data Science', 'Python', 'Deep learning','HTML', 'CSS', 'javascript', 'ReactJS'];
  
    return (
      <div className="resume-page">
        <h1>Resume</h1>
        <section className="education-section">
          <h2>Educational Background</h2>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                <p>{edu.year}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default Resume;
 