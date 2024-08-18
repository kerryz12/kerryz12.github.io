import "./about.css";
import { Feature } from '../../components'

function About() {
    return (
        <div className="about section__margin" id="about">
            <div className="about-feature">
                <Feature title="about me" text="I'm an electrical engineering graduate from UBC who loves both software and firmware programming! Whether it's designing code for an embedded system, solving leetcode problems, or creating this website, the capabilities and power of technology always excites me. " />
            </div>
            <div className="about-container">
                <Feature title="languages and tools" text="C, C++, JavaScript, TypeScript, React, NextJS, Vue, Java, Python, Verilog, SystemVerilog, ModelSim, Assembly, MATLAB, Travis-CI, Git, Linux, Jira, Agile, Pytorch, Numpy" />
                <Feature title="education" text="I received my Bachelor of Applied Science, majoring in Electrical Engineering, from The University of British Columbia in May 2024." />
                <Feature title="interests" text="In my free time, I love powerlifting, playing spikeball and soccer with my friends, trying to come up with fashionable new outfits, and solving geography quizes." />
            </div>
        </div>
    )
}

export default About;