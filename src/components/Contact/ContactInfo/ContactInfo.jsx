import { useTranslation } from "react-i18next";

function ContactInfo({ data }) {
    const [t] = useTranslation("global");

    return (
        <div className="contact-info">
            <h3>{t("contact.title")}</h3>
            <div className="contact-item">
                <label>{t("contact.whatsapp")}</label>
                <a href={`https://web.whatsapp.com/send?phone=${data && data.phone}`} target="_blank" rel="noreferrer"><h5>{data && data.phone}</h5></a>
            </div>
            <div className="contact-item">
                <label>{t("contact.email")}</label>
                <a href={`mailto:${data && data.email}`}><h5>{data && data.email}</h5></a>
            </div>
            <div className="contact-item">
                <label>{t("contact.office")}</label>
                <h5>{data && data.location}</h5>
            </div>
        </div>
    )
}

export default ContactInfo;