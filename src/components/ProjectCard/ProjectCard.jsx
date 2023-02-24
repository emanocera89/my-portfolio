import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (
        <Link to="/p/0" className="project-card">
            <img src={project && project.img} alt={project && project.name} />
            <h4>{project && project.name}</h4>
            <span>{project && project.category}</span>
        </Link>
    )
}

export default ProjectCard;