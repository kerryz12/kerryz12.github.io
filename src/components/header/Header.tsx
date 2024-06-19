import "./header.css"
import home from '../../assets/home-image.jpg'
import { TypeAnimation } from 'react-type-animation';

const quotes = ["\"if you have a task to do, it’s better to do it than to live with the fear of it.\"",
                "\"the best wisdom comes from the hardest struggle.\"",
                "\"a ship in a harbour is safe, but that is not what ships are built for.\""
                ]
const authors = ["-joe abercrombie", 
                 "-xavier rudd",
                 "-john a. shedd"
                ]
const timings = [3700,
                 2500,
                 3500
                ]

function Header() {
    var chosen = Math.floor(Math.random() * quotes.length);

    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    <TypeAnimation 
                        sequence={[quotes[chosen]]}
                        cursor={true}
                        speed={60}
                    />
                </h1>
                <p>
                    <TypeAnimation
                        sequence={[timings[chosen], authors[chosen]]}
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