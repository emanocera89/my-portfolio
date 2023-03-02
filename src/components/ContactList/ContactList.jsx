function ContactList({sectionTitle, ...rest}) {
    return (
        <div className="resume-item contact-list" {...rest}>
            <h3>{sectionTitle}</h3>
            <ul>
                <li><a href="#" title="Whatsapp">Whatsapp</a></li>
                <li><a href="#" title="Email">Email</a></li>
                <li><a href="#" title="Website">Website</a></li>
                <li><a href="#" title="LinkedIn">LinkedIn</a></li>
                <li><a href="#" title="Github">Github</a></li>
            </ul>
        </div>
    )
}

export default ContactList;