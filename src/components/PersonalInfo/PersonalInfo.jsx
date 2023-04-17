function PersonalInfo() {
    return (
        <div className="personal-info resume-item">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 wrapper">
                        <div className="photo-wrapper"><img src="" alt="Personal Pic" width="100%" /></div>
                        <h3 className="fullname">Emmanuel Nocera</h3>
                        <span className="profession">Frontend dev / UI designer</span>
                        <span className="location">Buenos Aires, Argentina</span>
                        <a href="/" title="website" className="website" target="_blank">www.emmanuelnocera.com</a>
                        <a href="/" title="email" className="email">contact@emmanuelnocera.com</a>
                        <a href="/" title="phone" className="phone">+541136452881</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;