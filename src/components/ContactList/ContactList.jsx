function ContactList({data, sectionTitle, ...rest}) {
    return (
        <div className="resume-item contact-list" {...rest}>
            <h3>{sectionTitle}</h3>
            <ul>
                <li><a href={`https://web.whatsapp.com/send?phone=${data && data.phone}`} target="_blank" rel="noreferrer" title="Whatsapp">Whatsapp</a></li>
                <li><a href={`mailto:${data && data.email}`} title="Email">Email</a></li>
                <li><a href={data && data.website} title="Website" target="_blank" rel="noreferrer">Website</a></li>
                <li><a href={data && data.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">LinkedIn</a></li>
                <li><a href={data && data.github} target="_blank" rel="noreferrer" title="Github">Github</a></li>
            </ul>
        </div>
    )
}

export default ContactList;