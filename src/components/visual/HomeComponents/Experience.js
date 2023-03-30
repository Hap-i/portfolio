import React from "react";

function Experience() {
  return (
    <div className="px-72">
      <div className="flex justify-center mt-28 text-4xl font-semibold mb-12">
        Work Experience
      </div>
      <div className="flex justify-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2021 - Present
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              Systems Engineer
            </h3>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              Tata Consultancy Services
            </h3>
            {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> */}
            <ul className="list-outside text-black">
              <li>
                Implemented a Ticketing system for a chatbot to handle customers
                coming in out-of-office hours, resulting in 34% more customer
                engagement.
              </li>
              <li>
                Worked on integrating various third-party systems with chatbot
                such as CRM, RPA bots, SendGrid, Google Cloud Functions, and
                Storage.
              </li>
              <li>
                Contributed majorly to Anomaly Detection, custom widgets,
                webform, and logging features.
              </li>
              <li>Developed Custom Widgets for Agents</li>
            </ul>
            {/* </p> */}
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct 2020 - Jan 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              Target Integration
            </h3>
            {/* <p className="mb-4 text-base font-normal dark:text-gray-400"> */}
            <ul className="list-outside text-black">
              <li>Got To learn about ERP systems</li>
              <li>Worked on a Hospital Management ERP system using Odoo</li>
            </ul>
            {/* </p> */}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
