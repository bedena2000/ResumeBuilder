import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface contactInformation {
  email: string;
  phone: string;
  linkedIn: string;
  twitter: string;
  instagram: string;
  portfolio: string;
  github: string;
}

export const Contact = () => {

  const [data, setData] = useState<contactInformation>({
      email: '',
      phone: '',
      linkedIn: '',
      twitter: '',
      instagram: '',
      portfolio: '',
      github: ''
  });

  console.log(data);

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919]">
          Contact Information
        </h2>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Email address
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="email"
            placeholder="Email adress"
            value={data.email}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  email: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Phone number
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="number"
            value={data.phone}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  phone: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex gap-4  mt-4 flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Linkedin Profile link
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.linkedIn}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  linkedIn: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Twitter Profile link
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.twitter}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  twitter: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex mt-4 gap-4 flex-wrap items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Instagram Profile link
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.instagram}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  instagram: event.target.value
                }
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Portfolio link
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.portfolio}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  portfolio: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Github profile link
          </p>
          <input
            className="w-auto text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.github}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  github: event.target.value
                }
              })
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap  justify-between items-center">
        <Link to="/create/experience">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="/create/award"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
        >
          Next Session
        </Link>
      </div>
    </div>
  );
};
