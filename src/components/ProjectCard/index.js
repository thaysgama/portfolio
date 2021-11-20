
import './style.scss'

    function ProjectCard({item}){

    return(
        <div class="col g-0">
            <div className={`card ${item.bg}`}>
                
                <div className="card-body" >
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.tag}</h6>
                    <p className="card-text">Tools: {item.tools}</p>
                    <a href={item.gitHubUrl} className="card-link">GitHub</a>
                    { item.website ? <a href={item.websiteUrl} className="card-link">Website</a> : ""}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;