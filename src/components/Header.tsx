import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useOutsideClickHook } from "../hooks/useOutsideClickHook";

export const Header = () => {
  const { pathname } = useLocation();
  const [isModal, setIsModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkPath = (targetPath: string): string => {
    return pathname === targetPath ? "text-[#8910F1]" : "";
  };

  const handleModal = () => {
    setIsModal((prev) => !prev);
  };

  useOutsideClickHook(ref, () => {
    setIsModal((prev) => !prev);
  });

  return (
    <header className="p-3 flex justify-between pt-8 pb-8 bg-gradient-to-b from-slate-200 to-slate-0">
      <div className="container flex items-center justify-between">
        <h1 className="font-nunito text-[#191919] text-3xl font-bold">
          RBuilder
        </h1>

        <div className="hidden lg:flex gap-12 font-nunito text-lg font-medium">
          <Link className={`${checkPath("/")}`} to="/">
            Home
          </Link>
          <Link className={`${checkPath("/templates")}`} to="/templates">
            Template
          </Link>
          <Link className={`${checkPath("/create")}`} to="/create">
            Create
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            to="/create"
            className="font-nunito text-xl px-10 py-3 bg-[#8910F1] font-semibold text-white rounded-lg"
          >
            Start
          </Link>
        </div>
        {!isModal ? (
          <div className="lg:hidden">
            <GiHamburgerMenu
              onClick={handleModal}
              className="cursor-pointer hover:text-slate-900 text-slate-700"
              size={32}
            />
          </div>
        ) : null}

        {isModal ? (
          <div
            ref={ref}
            className="fixed right-0 p-4 md:rounded-tl-[24px] h-full top-0 w-full  md:w-96 bg-slate-300 bg-opacity-80 font-nunito z-10 flex flex-col gap-7 justify-center text-3xl"
          >
            <Link
              className={`${checkPath(
                "/"
              )} bg-transparent transition-all hover:bg-white hover:text-black rounded-lg  hover:px-2`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${checkPath(
                "/templates"
              )} bg-transparent transition-all hover:bg-white hover:text-black rounded-lg  hover:px-2`}
              to="/templates"
            >
              Template
            </Link>
            <Link
              className={`${checkPath(
                "/create"
              )} bg-transparent transition-all hover:bg-white hover:text-black rounded-lg  hover:px-2`}
              to="/create"
            >
              Create
            </Link>

            <IoClose
              className="absolute right-3 top-2 cursor-pointer"
              onClick={handleModal}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
};
