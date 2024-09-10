import "./header.css"
import coder from '../../assets/coder.png'
import { TypeAnimation } from 'react-type-animation';
//import { useState, Suspense } from 'react'

{/*
import { Model } from '../../components';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
*/}

const quotes = ["\"if you have a task to do, it’s better to do it than to live with the fear of it.\"",
                "\"the best wisdom comes from the hardest struggle.\"",
                "\"a ship in a harbour is safe, but that is not what ships are built for.\"",
                ]
const authors = ["-joe abercrombie", 
                 "-xavier rudd",
                 "-john a. shedd",
                ]
const timings = [3900,
                 2600,
                 3600,
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
                {/* https://pngtree.com/freepng/developers-are-coding-programs-on-computers-programmers-are-analyzing-data_14867886.html */}
                <img src={coder} alt="kerry zhang" />
            </div>

{/*
            <div className="model">
                <Canvas camera = {{ fov: 75, position: [0, 2, 5] }}>
                    <ambientLight />
                    <OrbitControls />
                    <Model />
                </Canvas>
            </div>
*/}
        </div>
    )
}

export default Header;