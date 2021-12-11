import './style.scss'
import ProjectCard from '../ProjectCard';
import { Fragment } from 'react';

function ProjectsGrid(){
    
    const projectsData = [
      {
        id: 101,
        name: "Casa das Plantinhas | Front-end",
        tag: "Group Work",
        tools: "Html, Sass, JS, React and React-Bootstrap",
        website: true,
        gitHubUrl: "https://github.com/CheckPointIntegrador/front",
        websiteUrl: "https://front-red.vercel.app/",
        bg: "gradient-1",
      },
      {
        id: 102,
        name: "Casa das Plantinhas | Back-end",
        tag: "Group Work",
        tools: "Java and Spring",
        website: true,
        gitHubUrl: "https://github.com/CheckPointIntegrador/back",
        websiteUrl: "https://casadasplantinhas.herokuapp.com/",
        bg: "gradient-2",
      },
      {
        id: 103,
        name: "Dentist Registation",
        tag: "Individual Work",
        tools: "Java and Spring",
        website: false,
        gitHubUrl: "https://github.com/thaysgama/dh-backend-checkpointII",
        websiteUrl: "",
        bg: "gradient-3",
      },
      {
        id: 104,
        name: "To Do List",
        tag: "Group Work",
        tools: "Html, CSS and JS",
        website: true,
        gitHubUrl: "https://github.com/thaysgama/front-end_II-todo-list",
        websiteUrl: "https://sophiafiama.github.io/front-end_II-todo-list/",
        bg: "gradient-2",
      },
      {
        id: 105,
        name: "Donation Form",
        tag: "Group Work",
        tools: "Html, CSS and JS",
        website: true,
        gitHubUrl: "https://github.com/thaysgama/dh-frontendII-formulario",
        websiteUrl: "https://thaysgama.github.io/dh-frontendII-formulario/",
        bg: "gradient-3",
      }, 
      {
        id: 107,
        name: "T&M Vehicle Hire",
        tag: "Pair Work",
        tools: "Java",
        website: false,
        gitHubUrl: "https://github.com/thaysgama/locadora-veiculos",
        websiteUrl: "",
        bg: "gradient-1",
      },
      {
        id: 106,
        name: "Sudaca Filmes",
        tag: "Group Work",
        tools: "Html, CSS and JS",
        website: true,
        gitHubUrl: "https://github.com/thaysgama/dh-frontend-sudaca",
        websiteUrl: "https://thaysgama.github.io/dh-frontend-sudaca/",
        bg: "gradient-1",
      },
      {
        id: 108,
        name: "Netflix Clone",
        tag: "Individual Work",
        tools: "Html, CSS and JS",
        website: true,
        gitHubUrl: "https://github.com/thaysgama/dio-netflix-clone",
        websiteUrl: "https://thaysgama.github.io/dio-netflix-clone/",
        bg: "gradient-2",
      },
      {
        id: 109,
        name: "Genius Game",
        tag: "Individual Work",
        tools: "Html, CSS and JS",
        website: true,
        gitHubUrl: "https://github.com/thaysgama/dio-jogo-memoria-genius",
        websiteUrl: "https://thaysgama.github.io/dio-jogo-memoria-genius/",
        bg: "gradient-3",
      },
    ];

    return(
        
        <div className="projects" id="projects">
            <h2> 
                Projects
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                {
                    projectsData.map(item =>{
                        return (
                        <Fragment key={item.id}>
                            <ProjectCard item={item}/>
                        </Fragment>
                    )})
                }
            </div>
        </div>
    )
}

export default ProjectsGrid;