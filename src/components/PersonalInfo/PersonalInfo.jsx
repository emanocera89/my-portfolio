function PersonalInfo({ data }) {
    return (
        <div className="personal-info resume-item">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 wrapper">
                        <div className="photo-wrapper"><img src={data && data.photo} alt="Personal Pic" width="100%" /></div>
                        <h3 className="fullname">{data && data.fullname}</h3>
                        <span className="profession">{data && data.profession}</span>
                        <span className="location">{data && data.location}</span>
                        <a href={data && data.website} title="website" className="website" target="_blank" rel="noreferrer">{data && data.website}</a>
                        <a href={`mailto:${data && data.email}`} title="email" className="email">{data && data.email}</a>
                        <a href={`https://web.whatsapp.com/send?phone=${data && data.phone}`} title="phone" className="phone" target="_blank" rel="noreferrer">{data && data.phone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;