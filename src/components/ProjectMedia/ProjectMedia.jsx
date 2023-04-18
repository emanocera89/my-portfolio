function ProjectMedia({ project }) {
    const baseUrl = "https://www.emmanuelnocera.com/resources/"
    return (
        <div className="project-media">
            <div className="container">
                {project && project.media_images && project.media_images.map((img, idx) => (
                    <div className="media-container"><img src={baseUrl + img} alt={project.name} width="100%" /></div>
                ))}
                
            </div>
        </div>
    )
}

export default ProjectMedia;