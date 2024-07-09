import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface experienceData {
  employer: string;
  company: string;
  address: string;
  role: string;
  currentlyStudy: boolean;
  timePeriod: {
    start: string;
    finish: string;
  };
  description: string;
}

export const Experience = () => {
  
  const [data, setData] = useState<experienceData>({
    employer: '',
    company: '',
    address: '',
    role: '',
    currentlyStudy: false,
    timePeriod: {
      start: '',
      finish: ''
    },
    description: ''
  });

  console.log(data);
  

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919]">
          Experience
        </h2>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Employer
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Employer's name"
            value={data.employer}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  employer: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Company
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Company name"
            value={data.company}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  company: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex mt-4 flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Address
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.address}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  address: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">Role</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.role}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  role: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex m-4 items-center justify-end">
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

      <div>
        <textarea 
        className="bg-[#F0F0F0] border-[#B1B1B1] border rounded-xl w-full h-[200px] mt-5 p-3 text-[#191919] text-sm font-nunito font-normal outline-none resize-none"
        value={data.description}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  description: event.target.value
                }
              })
            }}></textarea>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/create/education">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="/create/contact"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
        >
          Next Session
        </Link>
      </div>
    </div>
  );
};
