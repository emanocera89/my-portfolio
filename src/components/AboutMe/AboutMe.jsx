function AboutMe({ data }) {
    return (
        <div className="resume-item">
            <h3>About me</h3>
            <p className="about-text">{data}</p>
        </div>
    )
}

export default AboutMe;