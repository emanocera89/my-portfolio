import Social from "../Social/Social";
import { useTranslation } from "react-i18next";

function Footer({ data }) {
    const [t] = useTranslation("global");
    return (
        <footer>
            <div className="container">
                <div className="footer-contact">
                    <h3>{t("footer.title")}</h3>
                    <Social data={data} />
                </div>
                <div className="copyright">
                    © 2023 Emmanuel Nocera.
                </div>
            </div>
        </footer>
    )
}

export default Footer;