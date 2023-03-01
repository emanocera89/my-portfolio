import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (
        <Link to="/p/0" className="project-card">
            <div className="image-wrapper">
                <img className="image" src={project && project.img} alt={project && project.name} />
            </div>
            <h4 className="title">{project && project.name}</h4>
            <span className="category">{project && project.category}</span>
        </Link>
    )
}

export default ProjectCard;