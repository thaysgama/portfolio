import './style.scss'
import ProjectCard from '../ProjectCard';
import { Fragment } from 'react';

function ProjectsGrid(){
    
    const projectsData = [{
        id: 101,
        name: 'Sudaca Filmes',
        tag: 'Group Work',
        tools: 'Html, CSS and JS',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/dh-frontend-sudaca',
        websiteUrl: 'https://thaysgama.github.io/dh-frontend-sudaca/',
        bg: 'gradient-1'
    },{
        id: 102,
        name: 'To Do List',
        tag: 'Group Work',
        tools: 'Html, CSS and JS',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/front-end_II-todo-list',
        websiteUrl: 'https://sophiafiama.github.io/front-end_II-todo-list/',
        bg:'gradient-2'
    }, {
        id: 103,
        name: 'Donation Form',
        tag: 'Group Work',
        tools: 'Html, CSS and JS',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/dh-frontendII-formulario',
        websiteUrl: 'https://thaysgama.github.io/dh-frontendII-formulario/',
        bg: 'gradient-3'
    }, {
        id: 104,
        name: 'Irmão do Jorel Form',
        tag: 'Individual Work',
        tools: 'Html, CSS, JS and React',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/dh-frontIII-irmao-do-jorel',
        websiteUrl: 'https://dh-front-iii-irmao-do-jorel.vercel.app/',
        bg: 'gradient-3'
    },{
        id: 105,
        name: 'T&M Vehicle Hire',
        tag: 'Pair Work',
        tools: 'Java',
        website:false,
        gitHubUrl: 'https://github.com/thaysgama/locadora-veiculos',
        websiteUrl: '',
        bg: 'gradient-1'
    }, {
        id: 106,
        name: 'Dentist Registation',
        tag: 'Individual Work',
        tools: 'Java and Maven',
        website:false,
        gitHubUrl: 'https://github.com/thaysgama/dh-backend-checkpointI',
        websiteUrl: '', 
        bg: 'gradient-2'
    },{ 
        id: 107,
        name: 'Netflix Clone',
        tag: 'Individual Work',
        tools: 'Html, CSS and JS',
        website: true,
        gitHubUrl: 'https://github.com/thaysgama/dio-netflix-clone',
        websiteUrl: 'https://thaysgama.github.io/dio-netflix-clone/',
        bg: 'gradient-2'
    },{
        id: 108,
        name: 'Genius Game',
        tag: 'Individual Work',
        tools: 'Html, CSS and JS',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/dio-jogo-memoria-genius',
        websiteUrl: 'https://thaysgama.github.io/dio-jogo-memoria-genius/',
        bg:'gradient-3'
    }, {
        id: 109,
        name: 'Landing Page Instagram',
        tag: 'Individual Work',
        tools: 'Html and CSS',
        website:true,
        gitHubUrl: 'https://github.com/thaysgama/dio-landing-page-instagram',
        websiteUrl: 'https://thaysgama.github.io/dio-landing-page-instagram/',
        bg: 'gradient-1'
    }
]

    return(
        
        <div className="projects" id="projects">
            <h2> 
                Projects
            </h2>
            <div className="row row-cols-1 row-cols-md-3">
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