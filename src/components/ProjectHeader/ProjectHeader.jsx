import { useTranslation } from "react-i18next";

function ProjectHeader({ project }) {
    const [t] = useTranslation("global");
    const lang = localStorage.getItem("lang");
    return (
        <div className="project-header">
            <div className="container">
                <h2 className="title">{project && project.name}</h2>
                <h4 className="category">{project && project.type}</h4>
                <div className="row">
                    <div className="col-lg-6 details">

                        <ul className="detail-list">

                            {project && project.client &&
                                <li><label>{t("project.client")}</label><a href={project.client_url ? project.client_url : "#"} target="_blank" rel="noreferrer">{project.client}</a></li>
                            }
                            {project && project.live_view &&
                                <li><a href={project.live_view} target="_blank" rel="noreferrer">{t("project.watch_online")}</a></li>
                            }
                            {project && project.source_code &&
                                <li><a href={project.source_code} target="_blank" rel="noreferrer">{t("project.source_code")}</a></li>
                            }
                            <li>
                                {project && project.tools_used && project.tools_used.map((i, id) => (
                                    <label className="tag">{i}</label>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p className="description">
                            {project &&
                                {
                                    'es': project.description_es,
                                    'en': project.description_en
                                }[lang]
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader;