import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface dataType {
  firstName: string;
  lastName: string;
  profession: string;
  address: string;
  city: string;
  state: string;
  zipCode: string | number | readonly string[] | undefined;
}

export const PersonalInformation = () => {
  const [data, setData] = useState<dataType>({
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    city: "",
    state: "",
    zipCode: 0,
  });

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-auto bg-white py-10 px-12 rounded-2xl flex flex-col justify-between ">
      <div className="flex items-center justify-between">
        <h2 className="font-nunito text-xl font-bold text-[#191919] mb-4">
          Personal Information
        </h2>
      </div>

      <div className="flex md:flex-row  flex-col gap-5  md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            First name
          </p>
          <input
            className="md:w-[200px]  text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="First name"
            value={data.firstName}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  firstName: event.target.value,
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Last name
          </p>
          <input
            className="md:w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="Surname"
            value={data.lastName}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  lastName: event.target.value,
                };
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap  mt-8 items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Proffesion
          </p>
          <input
            className="w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            placeholder="e.g Software engineer"
            value={data.profession}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  profession: event.target.value,
                };
              });
            }}
          />
        </div>
        <div className="flex  flex-col gap-3">
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Address
          </p>
          <input
            className="w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.address}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  address: event.target.value,
                };
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap mt-8 justify-between">
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">City</p>
          <input
            className="w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.city}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  city: event.target.value,
                };
              });
            }}
          />
        </div>
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">State</p>
          <input
            className="w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="text"
            value={data.state}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  state: event.target.value,
                };
              });
            }}
          />
        </div>
        <div>
          <p className="text-[#191919] text-lg font-nunito font-bold">
            Zip Code
          </p>
          <input
            className="w-[200px] text-[#191919] font-bold text-xl font-nunito  bg-[#F0F0F0] p-3 rounded-lg outline-none border-[#B1B1B1] border"
            type="number"
            value={data.zipCode}
            onChange={(event) => {
              setData((prevState) => {
                return {
                  ...prevState,
                  zipCode: event.target.value,
                };
              });
            }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Link to="/">
          <FaArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <Link
          to="education"
          className="bg-[#8910F1] rounded-lg outline-none py-4 px-14 text-white font-bold font-nunito text-lg"
          onClick={handleSubmit}
        >
          Next Session
        </Link>
      </div>
    </div>
  );
};
