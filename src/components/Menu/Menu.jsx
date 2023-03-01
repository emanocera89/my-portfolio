import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';


function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <button className="toggle-button" onClick={handleToggleMenu}><AiOutlineMenu /></button>
            {isOpen &&
                <div className="menu">
                    <ul>
                        <li><a href="/" title="Home" onClick={handleToggleMenu}>Home</a></li>
                        <li><a href="/#projects" title="Projects" onClick={handleToggleMenu}>Projects</a></li>
                        <li><a href="/resume" title="Resume" target="_blank" onClick={handleToggleMenu}>Resume</a></li>
                        <li><a href="/#contact" title="Contact" onClick={handleToggleMenu}>Contact</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu;