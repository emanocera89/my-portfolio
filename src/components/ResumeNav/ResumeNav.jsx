
import { useTranslation } from "react-i18next";

function ResumeNav() {
    const [t, i18n] = useTranslation("global");
    
    const handleChangeLang = (e, lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
        //alert(lang);
    }

    

    return (
        <header className="resume-nav">
            <nav className="container">
                <ul className="lt-nav me-auto">
                    <li><a href="#" onClick={(e) => handleChangeLang(e, "es")}>Español</a></li>
                    <li><a href="#" onClick={(e) => handleChangeLang(e, "en")}>English</a></li>
                </ul>

                <ul className="rt-nav ms-auto">
                    <li><a href="/resume#experience">{t("resume.experience")}</a></li>
                    <li><a href="/resume#education">{t("resume.education")}</a></li>
                    <li><a href="/resume#features">{t("resume.features")}</a></li>
                    <li><a href="/resume#contact">{t("resume.contact")}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default ResumeNav;
