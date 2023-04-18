import Social from "../Social/Social";
import { useTranslation } from "react-i18next";

function Footer() {
    const [t] = useTranslation("global");
    return (
        <footer>
            <div className="container">
                <div className="footer-contact">
                    <h3>{t("footer.title")}</h3>
                    <Social />
                </div>
                <div className="copyright">
                    © 2023 Emmanuel Nocera.
                </div>
            </div>
        </footer>
    )
}

export default Footer;