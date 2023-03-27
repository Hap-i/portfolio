import { motion } from "framer-motion";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSwagger,
} from "react-icons/si";

function Skills() {
  const languages = [
    {
      name: "Python",
      logo: <SiPython></SiPython>,
    },
    {
      name: "Javascript",
      logo: <SiJavascript></SiJavascript>,
    },
    {
      name: "Typescript",
      logo: <SiTypescript></SiTypescript>,
    },
  ];

  const frameworks = [
    {
      name: "Node JS",
      logo: <SiNodedotjs></SiNodedotjs>,
    },
    {
      name: "Express JS",
      logo: <SiExpress></SiExpress>,
    },
    {
      name: "Nest JS",
      logo: <SiNestjs></SiNestjs>,
    },
    {
      name: "React JS",
      logo: <SiReact></SiReact>,
    },
  ];

  const databases = [
    {
      name: "Mongo db",
      logo: <SiMongodb></SiMongodb>,
    },
    {
      name: "MySql",
      logo: <SiMysql></SiMysql>,
    },
  ];
  return (
    <div className="mt-20 md:mt-36">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-semibold mb-10">Skills</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="flex space-x-20 md:space-x-48">
          <div>
            <div className="text-xl font-medium mb-5">Languages</div>
            {languages.map((language, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl">
                  {language.logo}
                  <div>{language.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-xl font-medium mb-5">Framworks</div>
            {frameworks.map((framework, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl">
                  {framework.logo}
                  <div>{framework.name}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className="flex space-x-20 mt-10 md:space-x-44">
          <div>
            <div className="text-xl font-medium mb-5">Databases</div>
            {databases.map((database, i) => {
              return (
                <div
                  key={i}
                  className="flex space-x-2 mb-2 items-center md:text-xl">
                  {database.logo}
                  <div>{database.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-xl font-medium mb-5">Doc as a Service</div>
            <div className="flex space-x-2 mb-2 items-center md:text-xl">
              <SiSwagger></SiSwagger>
              <div>Swagger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
