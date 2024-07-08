import { BuilderHeader } from "../components/BuilderHeader";
import { BuilderMenu } from "../components/BuilderMenu";
import { Outlet } from "react-router-dom";

export const Create = () => {
  return (
    <div className="min-h-screen ">
      <div className="relative">
        <BuilderHeader />
        <div className="py-4 xl:px-0 px-4   flex flex-col xl:flex-row gap-14 justify-between container xl:-translate-y-12">
          <BuilderMenu />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
