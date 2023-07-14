import { useTranslation } from "react-i18next";

function LangSelector() {
    const [t, i18n] = useTranslation("global");
    let currentLang = localStorage.getItem('lang');

    const handleChangeLang = (e, lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
        window.location.reload();
        //alert(lang);
    }
    return (
        <ul className="lang-selector">
            <li><button onClick={(e) => handleChangeLang(e, 'es')} className={currentLang === 'es' ? 'active' : ''}>{t("labels.spanish")}</button></li>
            <li><button onClick={(e) => handleChangeLang(e, 'en')} className={currentLang === 'en' ? 'active' : ''}>{t("labels.english")}</button></li>
        </ul>
    )
}

export default LangSelector;