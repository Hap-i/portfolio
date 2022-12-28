import React, { useState } from "react";
import { helpData } from "../../utils/terminalData/data";

function Screen() {
  console.log("screen rendered");
  const [history, sethistory] = useState("");
  const [terminalHistory, setterminalHistory] = useState(
    React.createElement("div", { children: [] })
  );

  function newLineText(text) {
    return text.split("\n").map((str, i) => <p key={i}>{str}</p>);
  }

  function handleHistory(command, txt) {
    let st = `\nguest@hapi.com :~$ ${command} \n`;
    txt = history + st + txt;
    sethistory(txt);
    txt = newLineText(txt);
    setterminalHistory(txt);
  }

  function handleTerminalHistory(components) {
    let temp = React.createElement("div", {
      children: [...terminalHistory.props.children, components],
    });
    setterminalHistory(temp);
  }

  function addCommandLine() {
    //to-do add the commndline text with the command
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

    return helpDataDiv;
  }

  function handleCommandResponse(command) {
    if (command === "help") {
      handleTerminalHistory(formatHelpData(helpData));
    } else if (command === "run about.md") {
    } else if (command === "cd projects") {
    } else if (command === "run contact.md") {
    } else if (command === "run education.md") {
    } else if (command === "clear") {
    } else if (command === "run experience.md") {
    } else if (command === "run achivements.md") {
    } else if (command === "../") {
    } else if (command === "cd ~") {
    } else if (command === "run skills.md") {
    } else {
      handleHistory(command, "I don't know what you are saying man!!");
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
            <div className="text-white">guest@hapi.com :~$</div>
            <input
              className="pl-2 bg-slate-800 border-none w-auto text-white caret-white caret-2 focus: outline-none"
              type="text"
              onKeyUp={handleKeyUp}
            />
          </div>
          <div className="text-white flex justify-start">
            <div>
              <div className="text-green-500">ls</div>
              <div className="text-green-500">cd</div>
            </div>
            <div className="ml-5">
              <div className="">list of available files and directories</div>
              <div className="">change directory</div>
            </div>
          </div>
        </div>
        <div className="w-4/5">output</div>
      </div>
    </>
  );
}

export default Screen;
