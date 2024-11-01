import "./portfolio.css";
import { Article, Work } from "../../components";
import {
  job_header,
  dbforum,
  dbmanager,
  healthmonitor,
  songoftheday,
  guesstheword,
} from "./imports";

const Portfolio = () => {
  return (
    <div className="portfolio section__padding">
      <div className="portfolio-heading-1" id="portfolio">
        <h1 className="gradient__text">check out my portfolio below!</h1>
        <h1>work experience</h1>
      </div>
      <div className="portfolio-container-1">
        <div className="portfolio-container_group-1">
          <Work
            date="January 2022 - August 2022"
            company="Solidigm"
            title="Firmware Engineer Co-op"
            body={[
              `Developed robust C++ embedded software for overdose detection sensors, enhancing system reliability and early intervention capabilities by improving state machine and alert functionality logic.`,
              `Enhanced Travis CI/CD pipeline by integrating and configuring jobs for clang-tidy code linting and GTest unit testing, increasing production code quality.`,
              `Created custom C++ mock libraries to simulate device firmware, reducing hardware dependency during development cycle and improving test coverage by 30%.`,
              `Conducted onsite visits with clients, and implemented feedback with team to ensure alignment with client needs.`,
            ]}
          />
          <Work
            date="September 2022 - December 2022"
            company="Brave Technology"
            title="Firmware Engineer Co-op"
            body={[
              `Programmed C embedded software for solid state drives, delivering correct and well-documented code ensuring compliance with updated technical specifications.`,
              `Strengthened code comprehension and design skills while modifying extensive and complex existing codebase.`,
              `Completed stories, stand-ups, and code reviews through Agile methodology.`,
              `Designed and executed tests with internal tools successfully verifying functionality of changes and preventing regressions, and collaborated with internal teams to verify accurate interpretation of product function.`,
            ]}
          />
        </div>
      </div>

      <div className="portfolio-heading-2">
        <h1>projects</h1>
      </div>
      <div className="portfolio-container-2">
        <div className="portfolio-container_group-2">
          <Article
            url="https://guesstheworddaily.onrender.com/"
            imgUrl={guesstheword}
            date="October 2024"
            company="Guess the Word"
            title="Personal"
            body={[
              `Full-stack web-app where users attempt to guess a mystery word by asking yes or no questions.`,
              `Designed modern and responsive UI with theme toggle using TypeScript, React, and TailwindCSS.`,
              `Created RESTful API to handle daily word refresh, user guesses, login, and leaderboard functionality using Node, Express, and PostgreSQL database, and implemented generative AI responses using Groq API.`,
            ]}
          />
          <Article
            url="https://songoftheday.app/"
            imgUrl={songoftheday}
            date="July 2024 - September 2024"
            company="Song of the Day"
            title="Personal"
            body={[
              `Full-stack social media web-app allowing users to share a song they enjoy with others, every day.`,
              `Built application from scratch using TypeScript and React for frontend, and Node, Express and PostgreSQL for CRUD API backend, designing features such as daily user posts, comments, profiles, friends, and search.`,
              `Deployed database using Supabase, and web-app using DigitalOcean droplet with Docker container.`,
            ]}
          />
          <Article
            url="https://github.com/kerryz12/capstone2023_JY92"
            imgUrl={healthmonitor}
            date="September 2023 - April 2024"
            company="Wearable Health Monitor"
            title="UBC"
            body={[
              `Designed reliable and expandable MicroPython firmware for wrist-wearable device monitoring hospital patient vital signs, interfacing with Raspberry Pi and sensors, and implemented wireless communication using TCP.`,
              `Created Python backend with Flask endpoints allowing device to wirelessly transmit data to server.`,
              `Displayed data in custom user dashboard web-app built using JavaScript and Vue.`,
            ]}
          />
          <Article
            url=""
            imgUrl={job_header}
            date="March 2023 - April 2023"
            company="Robotic Claw Gripper"
            title="UBC"
            body={[
              `Designed PID control system for robotic claw gripper able to grasp varying objects including sensor system for detection, circuit hardware, and Arduino microcontroller.`,
              `Interfaced C firmware with mechanical design for automatic and reliable operation, and engineered both systems to work optimally together.`,
            ]}
          />
          <Article
            url="https://github.com/kerryz12/nwHacks-2022"
            imgUrl={dbforum}
            date="January 2022"
            company="DB Forum: Social Platform"
            title="nwHacks"
            body={[
              `Full-stack web forum allowing students from various schools to share posts and comments, using Next.JS for front-end, and Java with MongoDB for back-end.`,
              `Challenged problem-solving and software development skills while working under 24-hour time limit.`,
            ]}
          />
          <Article
            url="https://github.com/kerryz12/nwHacks-2021"
            imgUrl={dbmanager}
            date="January 2021"
            company="DB Manager: Assignment Tracker"
            title="nwHacks"
            body={[
              `Java application enabling students to track school assignments, built from scratch using OOP principles.`,
              `Utilized libraries such as Gson and JavaFX to create GUI and implement local storage.`,
            ]}
          />
          <Article
            url=""
            imgUrl={job_header}
            date="October 2020 - November 2020"
            company="Simple RISC Machine"
            title="UBC"
            body={[
              `Designed a RISC machine capable of executing ARM style instructions in Verilog.`,
              `Enhanced debugging skills by debugging interactions between registers, CPU, RAM and other components using ModelSim.`,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
