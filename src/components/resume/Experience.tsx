import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Experience = () => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919]">
          Experience
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Employer
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Employer's name"
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
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Address
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">Role</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Currently study here
          </p>
        </div>
      </div>

      <div className="flex gap-9 justify-between">
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">Start</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="date"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">Finish</p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="date"
            placeholder="MM/YY"
          />
        </div>
      </div>

      <div>
        <textarea className="bg-[#F0F0F0] border-[#B1B1B1] border rounded-xl w-full h-[200px] mt-5 p-3 text-[#191919] text-sm font-nunito font-normal outline-none resize-none"></textarea>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/create">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="/education"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
        >
          Next Session
        </Link>
      </div>
    </div>
  );
};
