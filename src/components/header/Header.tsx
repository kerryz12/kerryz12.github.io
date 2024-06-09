import "./header.css"
import home from '../../assets/home-image.jpg'

function Header() {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    "she sells seashells by the seashore."
                </h1>
                <p>-unknown</p>
            </div>

            <div className="header-image">
                <img src={home} alt="kerry zhang" />
            </div>
        </div>
    )
}

export default Header;