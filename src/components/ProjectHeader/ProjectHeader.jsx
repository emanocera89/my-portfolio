import { useTranslation } from "react-i18next";

function ProjectHeader() {
    const [t] = useTranslation("global");
    return (
        <div className="project-header">
            <div className="container">
                <h2 className="title">Project Name</h2>
                <div className="row">
                    <div className="col-lg-6 details">

                        <ul className="detail-list">
                            <li><span className="category">Project Category</span></li>
                            <li><label>{t("project.client")}</label><a href="">Client Name</a></li>
                            <li><a href="">Watch Online</a></li>
                            <li><a href="">Inspect source code</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader;