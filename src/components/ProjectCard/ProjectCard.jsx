import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
    const [t] = useTranslation("global");
    const lang = localStorage.getItem("lang");
    return (
        <a href={project && project.live_view} className="project-card" target="_blank" rel="noreferrer">
            <div className="image-wrapper">
                <img className="image" src={project && project.cover} alt={project && project.name} />
            </div>
            <div className="d-flex">
                <div className="project-info">
                    <h4 className="title">{project && project.name}</h4>
                    <span className="category">
                        {project &&
                            {
                                'Client Project': t("project.type.client_project"),
                                'Experimental': t("project.type.experimental")
                            }[project.type]
                        }

                    </span>
                </div>
                <div className="project-features ms-auto">
                    {project && project.tools_used && project.tools_used.slice(0, 5).map((i, id) => (
                        <label key={id} className="tag">{i}</label>
                    ))}
                </div>
            </div>

        </a>
    )
}

export default ProjectCard;