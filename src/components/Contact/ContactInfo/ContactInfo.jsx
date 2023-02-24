function ContactInfo() {
    return (
        <div className="contact-info">
            <h3>Don’t hesitate, contact with me</h3>
            <div className="contact-item">
                <label>Whatsapp</label>
                <a href="/"><h5>+54 11 3645 2881</h5></a>
            </div>
            <div className="contact-item">
                <label>Email</label>
                <a href="/"><h5>contact@emmanuelnocera.com</h5></a>
            </div>
            <div className="contact-item">
                <label>Office</label>
                <h5>Buenos Aires, Argentina</h5>
            </div>
        </div>
    )
}

export default ContactInfo;