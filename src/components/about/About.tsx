import "./about.css";
import { Feature } from "../../components";

function About() {
  return (
    <div className="about section__margin" id="about">
      <div className="about-feature">
        <Feature
          title="about me"
          text="I'm an electrical engineering graduate from UBC who loves both software and firmware programming! Whether it's designing code for an embedded system, creating different kinds of applications, solving leetcode problems, or even creating this website, the capabilities of technology always excite me. To this end, I'm always trying to learn new tools and improve my skills!"
        />
      </div>
      <div className="about-container">
        <Feature
          title="languages and tools"
          text="C, C++, JavaScript, TypeScript, React, NextJS, Vue, Node, Express, Java, Python, Verilog, SystemVerilog, ModelSim, Assembly, MATLAB, Travis-CI, Git, Linux, Jira, Agile, Pytorch, Numpy"
        />
        <Feature
          title="education"
          text="I studied at the University of British Columbia from September 2019 to May 2024, obtaining my Bachelor of Applied Science majoring in Electrical Engineering."
        />
        <Feature
          title="interests"
          text="In my free time, I love powerlifting, creating music, playing spikeball and soccer with my friends, trying to come up with fashionable new outfits, and solving geography quizes."
        />
      </div>
    </div>
  );
}

export default About;
