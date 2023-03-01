function AboutMe({ data, ...rest }) {
    return (
        <div className="resume-item" {...rest}>
            <h3>About me</h3>
            <p className="about-text">{data}</p>
        </div>
    )
}

export default AboutMe;