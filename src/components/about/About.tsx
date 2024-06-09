import "./about.css";
import { Feature } from '../../components'

function About() {
    return (
        <div className="about section__margin" id="about">
            <div className="about-feature">
                <Feature title="about me" text="sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text" />
            </div>
            <div className="about-container">
                <Feature title="skills" text="To pass a parameter to a React component, we can use props." />
                <Feature title="education" text="To pass a parameter to a React component, we can use props." />
                <Feature title="interests" text="To pass a parameter to a React component, we can use props." />
            </div>
        </div>
    )
}

export default About;