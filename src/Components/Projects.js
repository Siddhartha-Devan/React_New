import StateManagement from "./Statemanagement"


// const Projects = () => {
//     return(
//         <div>
//             <div><StateManagement /></div>
//             <h2>This is My Projects Page</h2>
//             <p>Hi all... The below are my projects</p>

//             <p className="greninja_text">
//                 I've decided to put up a greninja's img in all the sites that I make...
//             </p>
//         </div>
//     )
// };

// export default Projects



const ProjectsPage = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Tamil epigraphs data creation and recognition',
        link: "https://github.com/Siddhartha-Devan/Tamil-Epigraphs-data-creation-and-recognition"
      },
      {
        title: 'Project 2',
        description: 'Description of Project 2',
        link: 'https://github.com/Siddhartha-Devan'
      },
      {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: 'https://github.com/Siddhartha-Devan/fullstack-workshop'
      },
      {
        title: 'Project 4',
        description: 'Description of Project 4',
        link: 'https://github.com/Siddhartha-Devan/Tamil-Epigraphs-data-creation-and-recognition'
      }
    ];
  
    return (
      <div className="projects-page">
        <h1>Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectsPage;

