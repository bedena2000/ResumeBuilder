import { BuilderHeader } from "../components/BuilderHeader";
import { BuilderMenu } from "../components/BuilderMenu";
import { Award } from "../components/resume/Award";

export const Create = () => {
  return (
    <div className="min-h-screen ">
      <div className="relative">
        <BuilderHeader />
        <div className=" p-4 flex flex-col xl:flex-row gap-14 justify-between container xl:-translate-y-6">
          <BuilderMenu />
          <Award />
        </div>
      </div>
    </div>
  );
};
