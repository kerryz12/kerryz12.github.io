import { useState, useEffect, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import "./header.css";

const quotes = [
  '"if you have a task to do, it’s better to do it than to live with the fear of it."',
  '"the best wisdom comes from the hardest struggle."',
  '"a ship in a harbour is safe, but that is not what ships are built for."',
  '"comparison is the thief of joy."',
];
const authors = [
  "- joe abercrombie",
  "- xavier rudd",
  "- john a. shedd",
  "- teddy roosevelt",
];
const timings = [4100, 2700, 3600, 1900];

function Header() {
  const [terminalLineData, setTerminalLineData] = useState<ReactElement[]>([]);
  var chosen = Math.floor(Math.random() * quotes.length);

  const terminalLines = [
    { command: "whoami", output: "visitor@personal-website:~$" },
    {
      command: "cat about.txt",
      output: `Hi! I'm Kerry Zhang.
I'm a developer passionate about creating great software.
Currently working on exciting web-app projects!
`,
    },
    {
      command: "ls skills/",
      output: `Languages:    C/C++  JavaScript/TypeScript  Java  Python  SQL  Verilog/SystemVerilog  Assembly  HTML/CSS
`,
    },
    {
      command: "cat contact.txt",
      output: `Email:    kerryzhang12@gmail.com
GitHub:   github.com/kerryz12
LinkedIn: linkedin.com/in/kerry-zhang-ee/
`,
    },
  ];

  const getHelpOutput = () => `Available commands:
- whoami: Display user information
- cat about.txt: About me
- ls skills/: My skills
- cat contact.txt: My contact information
- clear: Clear the terminal
- help: Show this help message
`;

  const handleInput = (terminalInput: string) => {
    const inputLower = terminalInput.toLowerCase().trim();
    let response = "Command not found. Try 'help' for available commands.";

    if (inputLower === "help") {
      response = getHelpOutput();
    } else if (inputLower === "clear") {
      setTerminalLineData([]);
      return;
    } else {
      const matchedCommand = terminalLines.find(
        (line) => line.command === inputLower
      );
      if (matchedCommand) {
        response = matchedCommand.output;
      }
    }

    setTerminalLineData((prev) => [
      ...prev,
      <TerminalOutput
        key={`input-${Date.now()}`}
      >{`$ ${terminalInput}`}</TerminalOutput>,
      <TerminalOutput key={`output-${Date.now()}`}>{response}</TerminalOutput>,
      <TerminalOutput key={`newline-after-${Date.now()}`} />,
    ]);
  };

  const executeCommand = (command: string, delay: number) => {
    setTimeout(() => {
      handleInput(command);
    }, delay);
  };

  useEffect(() => {
    executeCommand("cat about.txt", 100);
    executeCommand("help", 1100);
  }, []);

  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          <TypeAnimation sequence={[quotes[chosen]]} cursor={true} speed={60} />
        </h1>
        <p>
          <TypeAnimation
            sequence={[timings[chosen], authors[chosen]]}
            cursor={false}
          />
        </p>
      </div>

      <div className="header-terminal">
        <Terminal
          name="Kerry's Terminal"
          colorMode={ColorMode.Dark}
          onInput={handleInput}
        >
          {terminalLineData}
        </Terminal>
      </div>
    </div>
  );
}

export default Header;
