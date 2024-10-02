import React from "react";
import data from "onboardingData.json";

const Dashboard = () => {
  console.log(data);
  return (
    <div className="  py-1">
      <div
        className="flex items-center justify-between fixed w-[100%] pr-10 pl-5 bg-white z-50 py-2"
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <img src="Images/logo.png" alt="..." className="w-32" />
        <div className="flex gap-10">
          <h1 className="text-lg font-semibold">Digital Wellbeing</h1>
          <h1 className="text-lg font-semibold">Chat with Chitra</h1>
        </div>
      </div>
      <div className="mt-44 flex items-center justify-center">
        <div className="w-[50%] bg-gray-100 h-4 rounded-full ">
          <div
            style={{
              width: `100%`,
            }}
            className="rounded-full bg-green-500 h-4 duration-700 transform"
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {data.gender === "Male" ? (
          <img src="Images/boy.jpg" alt="..." className="w-30 -mt-10" />
        ) : (
          <img src="Images/girl.jpg" alt="..." className="w-30 -mt-10" />
        )}
      </div>
      <div className="flex items-center justify-center -mt-10">
        <h1 className="font-semibold text-3xl">{data?.name}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
