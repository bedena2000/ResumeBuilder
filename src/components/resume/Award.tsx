import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface award {
  organization: string;
  title: string;
  date: string;
  description: string;
}

export const Award = () => {
  
  const [data, setData] = useState<award>({
    organization: '',
    title: '',
    date: '',
    description: ''
  });

  console.log(data);

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919]">
          Award/Certification
        </h2>
      </div>

      <div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Name of Organization
          </p>
          <input
            className="w-full text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Organisation’s name"
            value={data.organization}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  organization: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Award Title (optional)
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Country name"
            value={data.title}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  title: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Date of Acquisition
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="date"
            value={data.date}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  date: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-9 justify-between">
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Description
          </p>
          <div className="w-full">
            <textarea className="bg-[#F0F0F0] border-[#B1B1B1] border rounded-xl w-full h-[200px] mt-5 p-3 text-[#191919] text-sm font-nunito font-normal outline-none resize-none"
            value={data.description}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  description: event.target.value
                }
              })
            }}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/create/contact">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="/create/finish"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
        >
          Finish
        </Link>
      </div>
    </div>
  );
};
