
import { useState, useEffect } from "react";
import LangSelector from "../LangSelector/LangSelector";
import Menu from "../Menu/Menu";


function Navbar() {
    const [darkClass, setDarkClass] = useState('');

    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            setDarkClass(scrollPosition > 0 ? 'dark' : '');
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    

    return (
        <header className={`navbar ${darkClass}`}>
            <div className="container">
                <div className="logo">Emmanuel Nocera</div>
                <LangSelector />
                <Menu />
            </div>
        </header>
    )
}

export default Navbar;