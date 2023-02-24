import { useState } from "react";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <button onClick={handleToggleMenu}>Toggle Menu</button>
            {isOpen &&
                <div className="menu">
                    <ul>
                        <li><a href="/" title="Home">Home</a></li>
                        <li><a href="/#projects" title="Projects">Projects</a></li>
                        <li><a href="/resume" title="Resume">Resume</a></li>
                        <li><a href="/#contact" title="Contact">Contact</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu;