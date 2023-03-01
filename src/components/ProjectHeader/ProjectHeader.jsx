function ProjectHeader() {
    return (
        <div className="project-header">
            <div className="container">
                <h2 className="title">Project Name</h2>
                <div className="row">
                    <div className="col-lg-6 details">

                        <ul className="detail-list">
                            <li><label>Category: </label><span>Project Category</span></li>
                            <li><label>Client: </label><span>Client Name</span></li>
                            <li><label>Live Link: </label><span>Live link</span></li>
                            <li><label>Source Code: </label><span>Github link?</span></li>
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