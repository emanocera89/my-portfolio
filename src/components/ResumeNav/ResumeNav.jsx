function ResumeNav() {
    return (
        <header className="resume-nav">
            <nav className="container">
                <ul className="lt-nav me-auto">
                    <li><a href="/">Español</a></li>
                    <li><a href="/">English</a></li>
                </ul>

                <ul className="rt-nav ms-auto">
                    <li><a href="/resume#experience">Experience</a></li>
                    <li><a href="/resume#education">Education</a></li>
                    <li><a href="/resume#features">Features</a></li>
                    <li><a href="/resume#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default ResumeNav;
