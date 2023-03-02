function AboutMe({ sectionTitle, data, ...rest }) {
    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            <p className="about-text">{data}</p>
        </div>
    )
}

export default AboutMe;