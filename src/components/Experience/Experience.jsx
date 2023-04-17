function Experience({ sectionTitle = 'Default Title', data, ...rest }) {
    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            {data && data.map((item) => (
                <div className="experience-item">
                    <h4 className="title">{item.title} @ <a href={item.website} target="_blank" rel="noreferrer">{item.company}</a></h4>
                    <span className="subtitle">{item.subtitle}</span>
                    <p className="description">{item.description}</p>
                </div>
            ))}

        </div>
    )
}

export default Experience;