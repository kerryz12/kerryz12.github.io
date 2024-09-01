import "./portfolio.css"
import { Article, Work } from '../../components'
import { job_header, solid, dbforum, dbmanager, healthmonitor } from './imports'

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
                    <Work date="January - August 2022" company="Solidigm" title="Firmware Engineer Coop" 
                        body="Developed C++ embedded software for overdose detection sensors, such as by modifying state machine, 
                        and deployed changes through AWS. Worked with and improved Travis-CI process, implementing code linting 
                        and unit tests in Linux development environment. Conducted onsite visits with clients, communicating
                        feedback with team to improve product solution." 
                    />
                    <Work date="September - December 2022" company="Brave Technology" title="Firmware Engineer Coop" 
                        body="Programmed firmware for solid state drives in C language, implementing technical specification. 
                        Completed stories, stand-ups, and code reviews through Agile methodology. Strengthened code comprehension and design skills 
                        while traversing extensive existing codebase, conducting manual testing to ensure functionality and lack of regressions." 
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
                        body="Implemented algorithms and developed wireless communication system using TCP for wrist-wearable device monitoring hospital patient vital signs. 
                        Designed reliable, expandable code from scratch interfacing with Raspberry Pi and sensors. Implemented backend with Flask endpoints for device to 
                        wirelessly display data in user dashboard webapp." 
                    />
                    <Article url="" imgUrl={job_header} date="March - April 2023" company = "Robotic Claw Gripper" title="UBC" 
                        body="Designed PID control system for robotic claw gripper able to grasp varying objects, utilizing various sensor systems such as optical sensor.
                        Interfaced C firmware with mechanical design for automatic and reliable operation, engineering both systems to work optimally together." 
                    />
                    <Article url="https://github.com/kerryz12/nwHacks-2022" imgUrl={dbforum} date="January 2022" company = "DB Forum: Social Platform" title="nwHacks" 
                        body="Full-stack web forum allowing students from various schools to share posts and comments, using Next.JS for front-end, and Java with MongoDB for back-end.
                        Challenged problem-solving and software development skills while working under 24-hour time limit." 
                    />
                    <Article url="https://github.com/kerryz12/nwHacks-2021" imgUrl={dbmanager} date="January 2021" company = "DB Manager: Assignment Tracker" title="nwHacks" 
                        body="Java application enabling students to track school assignments, built from scratch using OOP principles. Utilized libraries such as Gson and JavaFX to create
                        GUI and implement local storage." 
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