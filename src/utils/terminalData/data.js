const helpData = [
  {
    command: "cd",
    description: "change current working directory",
  },
  {
    command: "ls",
    description: "list of available commands",
  },
  {
    command: "run",
    description: "run a .md file ex: run about.md",
  },
  {
    command: "exit",
    description: "exit the terminal go back to normal mode",
  },
  {
    command: "clear",
    description: "clear the terminal console",
  },
  {
    command: "help",
    description: "to see the lsit of available commands",
  },
];

const lsHome = [
  {
    type: "file",
    name: "about.md",
  },
  {
    type: "file",
    name: "achivements.md",
  },
  {
    type: "file",
    name: "contact.md",
  },
  {
    type: "file",
    name: "education.md",
  },
  {
    type: "file",
    name: "experience.md",
  },
  {
    type: "folder",
    name: "projects/",
  },
  {
    type: "file",
    name: "skills.md",
  },
];

const lsProjects = ["project1.md", "project2.md", "project3.md"];

module.exports = {
  helpData,
  lsHome,
  lsProjects,
};
