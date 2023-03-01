function Experience({ sectionTitle = 'Default Title', data }) {
    return (
        <div className="resume-item">
            <h3>{sectionTitle}</h3>
            {data && data.map((item) => (
                <div className="experience-item">
                    <h4 className="title">{item.title}</h4>
                    <span className="subtitle">{item.subtitle}</span>
                    <p className="description">{item.description}</p>
                </div>
            ))}

        </div>
    )
}

export default Experience;