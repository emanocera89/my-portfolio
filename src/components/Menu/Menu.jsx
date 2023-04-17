import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { useTranslation } from "react-i18next";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation("global");


    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }

    
    return (
        <>
            <button className="toggle-button" onClick={handleToggleMenu}>
                {isOpen ? <IoCloseSharp className="icon-close" /> : <AiOutlineMenu className="icon-menu" />}
                
            </button>
            {isOpen &&
                <div className="menu">
                    <ul>
                        <li><a href="/" title="Home" onClick={handleToggleMenu}>{t("sections.home")}</a></li>
                        <li><a href="/#projects" title="Projects" onClick={handleToggleMenu}>{t("sections.projects")}</a></li>
                        <li><a href="/resume" title="Resume" target="_blank" onClick={handleToggleMenu}>{t("sections.resume")}</a></li>
                        <li><a href="/#contact" title="Contact" onClick={handleToggleMenu}>{t("sections.contact")}</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu;