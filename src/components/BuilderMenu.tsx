import { IoPersonSharp } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPassport } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

export const BuilderMenu = () => {
  return (
    <div className="bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-2xl  xl:w-[500px] xl:h-[765px] flex items-center xl:items-stretch xl:flex-col gap-10 relative z-20 justify-between xl:justify-center xl:px-4 xl:p-2 p-2 flex-wrap">
      <div className="h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ">
        <IoPersonSharp className="hidden xl:block" size={24} />
        <p className="xl:text-xl   font-nunito ease-out duration-100 font-bold">
          Personal Information
        </p>
      </div>
      <div className="h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ">
        <GiDiploma className="hidden xl:block" size={22} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Education
        </p>
      </div>
      <div className="h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ">
        <PiBagSimpleFill className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Experience
        </p>
      </div>
      <div className="h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ">
        <FaPassport className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Contact Information
        </p>
      </div>
      <div className="h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ">
        <FaAward className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Award/Certification
        </p>
      </div>
    </div>
  );
};
