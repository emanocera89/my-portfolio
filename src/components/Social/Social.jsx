function Social({ data }) {
    return (
        <div className="social">
            <ul className="d-flex">
                <li><a href={`mailto:${data && data.email}`}>Email</a></li>
                <li><a href={data && data.github} target="_blank" rel="noreferrer">Github</a></li>
                <li><a href={data && data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </div>
    )
}

export default Social;