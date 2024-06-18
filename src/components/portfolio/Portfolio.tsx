import "./portfolio.css"
import { Article } from '../../components'
import { tech, job_header, zen_header, solid, dbforum, dbmanager, healthmonitor } from './imports'

const Portfolio = () => {
    return (
        <div className="portfolio section__padding">
            <div className="portfolio-heading-1" id="portfolio">
                <h1 className="gradient__text">
                    check out my portfolio below!
                </h1>
                <h1>
                    work experience
                </h1>
            </div>
            <div className="portfolio-container-1">
                <div className="portfolio-container_group-1">
                    <Article url="" imgUrl={solid} date="January - August 2022" company="Solidigm" title="Firmware Engineer Coop" 
                        body="Developed C++ firmware for overdose detection sensors,
                        such as by modifying firmware state machine. Worked
                        with and improved Travis CI process by implementing
                        code linting and unit tests. Communicated feedback
                        from clients and team while improving product solution. " 
                    />
                    <Article url="" imgUrl={solid} date="September - December 2022" company="Brave Technology" title="Firmware Engineer Coop" 
                        body="Programmed firmware for solid state drives in C language, implementing technical specification. Made use
                        of testing and formal development tools such as Jira
                        and Git. Strengthened code comprehension and design
                        skills while traversing large existing codebase." 
                    />
                </div>
            </div>

            <div className="portfolio-heading-2">
                <h1>
                    projects
                </h1>
            </div>
            <div className="portfolio-container-2">
                <div className="portfolio-container_group-2">
                    <Article url="https://github.com/kerryz12/capstone2023_JY92" imgUrl={healthmonitor} date="September 2023 - April 2024" company = "Wearable Health Monitor" title="UBC" 
                        body="Developing algorithms and wireless communication
                        systems for wrist-wearable device monitoring hospital
                        patient vital signs. Designing reliable, expandable code
                        from scratch interfacing with Raspberry Pi and sensors." 
                    />
                    <Article url="" imgUrl={job_header} date="March - April 2023" company = "Robotic Claw Gripper" title="UBC" 
                        body="Utilized sensor systems to design PID control system for
                        robotic claw. Interfaced C firmware with mechanical design for automatic and reliable operation, engineering
                        both systems to work optimally with one another." 
                    />
                    <Article url="https://github.com/kerryz12/nwHacks-2022" imgUrl={dbforum} date="January 2022" company = "DB Forum: Social Platform" title="nwHacks" 
                        body="In 24 hours during nwHacks 2022 Hackathon, cooperatively implemented full-stack school-sorted forum website using Next.JS for front-end, and Java and MongoDB
                        for back-end. Challenged problem-solving and software development skills while working under time limit" 
                    />
                    <Article url="https://github.com/kerryz12/nwHacks-2021" imgUrl={dbmanager} date="January 2021" company = "DB Manager: Assignment Tracker" title="nwHacks" 
                        body="Created school assignment tracker application with
                        team of four during nwHacks 2021 Hackathon in a 24-
                        hour period. Use of Git and libraries such as Gson and
                        JavaFX to collaboratively create Java GUI app." 
                    />
                    <Article url="" imgUrl={job_header} date="October - November 2020" company = "Simple RISC Machine" title="UBC" 
                        body="Designed a RISC machine capable of executing ARMstyle instructions in Verilog. Enhanced debugging skills
                        by debugging interactions between registers, CPU, RAM
                        and other components using ModelSim." 
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;