import "./header.css"
import home from '../../assets/home-image.jpg'
import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    <TypeAnimation 
                        sequence={["\"if you have a task to do, it’s better to do it than to live with the fear of it.\""]}
                        cursor={true}
                        speed={60}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[3500, "-joe abercrombie"]}
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