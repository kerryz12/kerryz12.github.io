import "./header.css"
import home from '../../assets/home-image.jpg'
import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    <TypeAnimation 
                        sequence={["don't expect to find diamonds while mining at the wrong level."]}
                        cursor={true}
                        speed={60}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[3000, "-unknown"]}
                        cursor={false}
                    />
                </p>
            </div>

            <div className="header-image">
                <img src={home} alt="kerry zhang" />
            </div>
        </div>
    )
}

export default Header;