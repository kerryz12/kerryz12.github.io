import "./navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <p>kerry zhang</p>
                </div>
                <div className="navbar-links_container">
                    <p><a href="/">home</a></p>
                    <p><a href="/about">about</a></p>
                    <p><a href="/portfolio">portfolio</a></p>
                </div>
            </div>

            {/*<div className="navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" sizes={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" sizes={27} onClick={() => setToggleMenu(false)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container">
                            <p><a href="#home">home</a></p>
                            <p><a href="#about">about</a></p>
                            <p><a href="#portfolio">portfolio</a></p>
                        </div>
                    </div>
                )}
            </div>*/}
            
        </div>
    )
}

export default Navbar;