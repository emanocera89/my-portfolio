import LangSelector from "../LangSelector/LangSelector";
import Menu from "../Menu/Menu";


function Navbar() {
    

    return (
        <header className="navbar">
            <div className="container">
                <div className="logo">Emmanuel Nocera</div>
                <LangSelector />
                <Menu />
            </div>
        </header>
    )
}

export default Navbar;