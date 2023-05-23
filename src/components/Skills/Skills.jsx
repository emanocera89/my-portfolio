function Skills({ sectionTitle, data, ...rest }) {
    return (
        <div className="resume-item" {...rest}>
            <h3>{sectionTitle}</h3>
            <ul className="skill-list">
                {data && data.map((skill, index) => (
                    <li key={index}><span className="tag">{skill}</span></li>
                ))}
                
            </ul>
        </div>
    )
}

export default Skills;