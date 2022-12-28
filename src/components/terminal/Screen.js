import React, { useState } from "react";
import { helpData, lsHome, lsProjects } from "../../utils/terminalData/data";

function Screen() {
  const [terminalHistory, setterminalHistory] = useState(
    React.createElement("div", { children: [] })
  );
  const [cwd, setcwd] = useState("");

  function handleTerminalHistory(components) {
    let temp = React.createElement("div", {
      children: [...terminalHistory.props.children, components],
    });
    setterminalHistory(temp);
  }

  function addCommandLine(command, children) {
    return React.createElement("div", {
      className: "my-4",
      children: [
        <div className="text-white mb-4">{`guest@hapi.com : ${cwd} $ ${command}`}</div>,
        children,
      ],
    });
  }

  function formatHelpData(helpData) {
    let commandComponents = helpData.map((data, i) => {
      return (
        <div key={i} className="text-green-500">
          {data.command}
        </div>
      );
    });
    const commandDiv = React.createElement("div", {
      className: "",
      children: commandComponents,
    });

    let descriptionComponent = helpData.map((data, i) => {
      return (
        <div key={i} className="text-white">
          {data.description}
        </div>
      );
    });

    const descriptionDiv = React.createElement("div", {
      className: "ml-5",
      children: descriptionComponent,
    });

    const helpDataDiv = React.createElement("div", {
      className: "flex justify-start",
      children: [commandDiv, descriptionDiv],
    });

    return addCommandLine("help", helpDataDiv);
  }

  function handlels() {
    let lscomponents = [];
    if (cwd === "") {
      for (let i = 0; i < lsHome.length; i++) {
        if (lsHome[i].type === "file") {
          lscomponents.push(
            <div className="text-green-500">{lsHome[i].name}</div>
          );
        } else if (lsHome[i].type === "folder") {
          lscomponents.push(
            <div className="text-blue-800">{lsHome[i].name}</div>
          );
        }
      }
    } else if (cwd === "projects/") {
      lscomponents = lsProjects.map((project) => {
        return <div className="text-green-500">{project}</div>;
      });
    }
    let lsDiv = React.createElement("div", {
      className: "grid grid-cols-4 w-4/5",
      children: lscomponents,
    });
    return addCommandLine("ls", lsDiv);
  }

  function changeCwd(dir, command) {
    handleTerminalHistory(
      <div className="text-white">{`guest@hapi.com : ${cwd} $ ${command}`}</div>
    );
    setcwd(dir);
  }

  function clearTerminal() {
    setterminalHistory(React.createElement("div", { children: [] }));
  }

  function handleCommandResponse(command) {
    if (command === "help") {
      handleTerminalHistory(formatHelpData(helpData));
    } else if (command === "ls") {
      handleTerminalHistory(handlels());
    } else if (command === "cd projects" || command === "cd projects/") {
      changeCwd("projects/", "cd projects/");
    } else if (command === "cd ~") {
      changeCwd("", "cd ~");
    } else if (command === "clear") {
      clearTerminal();
    } else if (command === "cd ../") {
      changeCwd("", "cd ../");
    } else if (command === "run about.md") {
    } else if (command === "run contact.md") {
    } else if (command === "run education.md") {
    } else if (command === "run experience.md") {
    } else if (command === "run achivements.md") {
    } else if (command === "run skills.md") {
    } else {
    }
  }
  function handleKeyUp(e) {
    if (e.key === "Enter") {
      handleCommandResponse(e.target.value);
      e.target.value = "";
    }
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-slate-800 h-screen w-screen pl-4">
          <div className="animate-type"></div>
          <div className="text-white" id="history">
            {terminalHistory}
          </div>
          <div className="flex justify-start">
            <div className="text-white">{`guest@hapi.com : ${cwd} $`}</div>
            <input
              className="pl-2 bg-slate-800 border-none w-auto text-white caret-white caret-2 focus: outline-none"
              type="text"
              onKeyUp={handleKeyUp}
            />
          </div>
          {/* <div className="my-4">
            <div className="text-white mb-4">guest@hapi.com :~$ ls</div>
            <div className="text-green-500 grid grid-cols-4 w-4/5">
              <div>about.md</div>
              <div>achivements.md</div>
              <div>contact.md</div>
              <div>education.md</div>
              <div>experience.md</div>
              <div className="text-blue-800">projects/</div>
              <div>skills.md</div>
            </div>
          </div> */}
        </div>
        <div className="w-4/5 ">output</div>
      </div>
    </>
  );
}

export default Screen;
