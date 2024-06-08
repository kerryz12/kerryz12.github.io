import "./navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <p>kerry zhang</p>
                </div>
                <div className="navbar-links_container">
                    <p><a href="#home">home</a></p>
                    <p><a href="#about">about</a></p>
                    <p><a href="#portfolio">portfolio</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;