import Menu from "../Menu/Menu";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container">
                <div className="logo">Emmanuel Nocera</div>
                <Menu />
            </div>
        </header>
    )
}

export default Navbar;