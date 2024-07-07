import { Link } from "react-router-dom";

export const BuilderHeader = () => {
  return (
    <div className="p-4 w-full h-[183px] bg-[#8910F1]">
      <div className="container flex items-center h-full text-white font-nunito text-3xl font-bold justify-between">
        <h2>Resume Builder</h2>
        <Link to="/" className="text-xl">
          Home
        </Link>
      </div>
    </div>
  );
};
