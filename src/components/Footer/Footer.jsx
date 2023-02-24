import Social from "../Social/Social";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-contact">
                    <h3>Let’s work together on your next project</h3>
                    <Social />
                </div>
                <div className="copyright">
                    © 2023,Copyright 2020. Rainbow Themes.
                </div>
            </div>
        </footer>
    )
}

export default Footer;