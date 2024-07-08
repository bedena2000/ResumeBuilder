import { IoPersonSharp } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPassport } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const BuilderMenu = () => {
  const { pathname } = useLocation();
  const pagePath: string | undefined = pathname.split("/")[2];
  const checkIfPath = (checker: string) => {
    if (checker === "/" && pagePath === undefined) {
      return true;
    }

    if (checker !== undefined) {
      return checker === pagePath ? true : false;
    }
  };

  return (
    <div className="bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-2xl  xl:w-[500px] xl:h-[765px] flex items-center xl:items-stretch xl:flex-col gap-10 relative z-20 justify-between xl:justify-center xl:px-4 xl:p-2 p-2 flex-wrap">
      <Link
        to=""
        className={`h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ${
          checkIfPath("/") ? "bg-[#8910F1] text-white" : ""
        }`}
      >
        <IoPersonSharp className="hidden xl:block" size={24} />
        <p className="xl:text-xl   font-nunito ease-out duration-100 font-bold">
          Personal Information
        </p>
      </Link>
      <Link
        to="education"
        className={`h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ${
          checkIfPath("education") ? "bg-[#8910F1] text-white" : ""
        }`}
      >
        <GiDiploma className="hidden xl:block" size={22} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Education
        </p>
      </Link>
      <Link
        to="experience"
        className={`h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ${
          checkIfPath("experience") ? "bg-[#8910F1] text-white" : ""
        }`}
      >
        <PiBagSimpleFill className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Experience
        </p>
      </Link>
      <Link
        to="contact"
        className={`h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ${
          checkIfPath("contact") ? "bg-[#8910F1] text-white" : ""
        }`}
      >
        <FaPassport className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Contact Information
        </p>
      </Link>
      <Link
        to="award"
        className={`h-fit xl:px-8 xl:py-5 flex gap-1 items-center cursor-pointer lg:border-2 lg:border-[#4E4D4D]  lg:hover:border-[#8910F1] lg:hover:border-2 lg:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-out duration-100 hover:text-[#8910F1] rounded-2xl p-2 lg:p-3 text-sm ${
          checkIfPath("award") ? "bg-[#8910F1] text-white" : ""
        }`}
      >
        <FaAward className="hidden xl:block" size={24} />
        <p className="xl:text-xl font-nunito ease-out duration-100 font-bold">
          Award/Certification
        </p>
      </Link>
    </div>
  );
};
