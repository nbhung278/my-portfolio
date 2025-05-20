import React from "react";

const Education = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 text-white bg-clip-text text-transparent">
        Education
      </h2>
      <div className="max-w-2xl mx-auto bg-black/70 rounded-xl p-6 shadow border border-gray-800">
        <div className="font-semibold text-xl text-white mb-1">
          ELECTRIC POWER UNIVERSITY
        </div>
        <div className="text-sm text-indigo-300 mb-2">08/2018 - 03/2023</div>
        <div className="text-gray-300 text-sm mb-2">
          Information Technology, majoring in E-commerce.
        </div>
        <ul className="list-disc pl-5 text-gray-300 text-sm">
          <li>
            Achieved good results in specialized IT subjects (database, web
            programming).
          </li>
          <li>B2 foreign language certificate.</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
