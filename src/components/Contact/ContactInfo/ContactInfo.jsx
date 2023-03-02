import { useTranslation } from "react-i18next";

function ContactInfo() {
    const [t] = useTranslation("global");

    return (
        <div className="contact-info">
            <h3>{t("contact.title")}</h3>
            <div className="contact-item">
                <label>{t("contact.whatsapp")}</label>
                <a href="/"><h5>+54 11 3645 2881</h5></a>
            </div>
            <div className="contact-item">
                <label>{t("contact.email")}</label>
                <a href="/"><h5>contact@emmanuelnocera.com</h5></a>
            </div>
            <div className="contact-item">
                <label>{t("contact.office")}</label>
                <h5>Buenos Aires, Argentina</h5>
            </div>
        </div>
    )
}

export default ContactInfo;