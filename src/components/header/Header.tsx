import "./header.css"
import home from '../../assets/home-image.jpg'

function Header() {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    "the imposter is sus"
                </h1>
                <p>amogus</p>
            </div>

            <div className="header-image">
                <img src={home} alt="kerry zhang" />
            </div>
        </div>
    )
}

export default Header;