import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface educationData {
  institution: string;
  course: string;
  country: string;
  state: string;
  currentlyStudy: boolean;
  timePeriod: {
    start: string;
    finish: string;
  };
}

export const Education = () => {
  const [data, setData] = useState<educationData>({
    institution: "",
    course: "",
    country: "",
    currentlyStudy: false,
    state: "",
    timePeriod: {
      start: "",
      finish: "",
    },
  });

  console.log(data);

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between gap-8 flex-wrap">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919]">
          Education
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Institution Name
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Name of school"
            value={data.institution}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  institution: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-wrap flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">Course</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Course studied"
            value={data.course}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  course: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Country
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Country name"
            value={data.country}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  country: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-wrap flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">State</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.state}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  state: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <p className="text-[#191919] text-lg font-nunito font-bold">
          Time Period
        </p>
        <div className="flex items-center gap-2">
          <input type="checkbox" 
            checked={data.currentlyStudy}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  currentlyStudy: event.target.checked
                }
              })
            }}
          />
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Currently study here
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-9 justify-between">
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">Start</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="date"
            placeholder="MM/YY"
            value={data.timePeriod.start}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  timePeriod: {
                    start: event.target.value,
                    finish: prevState.timePeriod.finish
                  }
                }
              })
            }}
          />
        </div>
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">Finish</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="date"
            placeholder="MM/YY"
            value={data.timePeriod.finish}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  timePeriod: {
                    start: prevState.timePeriod.start,
                    finish: event.target.value
                  }
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center">
        <Link to="/create">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="/create/experience"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
        >
          Next Session
        </Link>
      </div>
    </div>
  );
};
