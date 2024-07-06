import { Link } from "react-router-dom";

export const HomePageContent = () => {
  return (
    <div className="container text-center flex justify-center">
      <div className="lg:w-[560px] mt-28">
        <p className="text-[#4E4D4D] text-xl  md:text-2xl font-nunito font-bold mb-5">
          BOOST YOUR CAREER CHASING
        </p>
        <p className="text-[#000000] text-3xl  md:text-5xl font-nunito font-extrabold mb-5">
          Land your dream job with already made <br />
          <span className="text-[#8910F1]">Eye catchy Resumes.</span>
        </p>
        <p className="text-[#4E4D4D] text-xl md:text-2xl font-nunito font-bold mb-6">
          Create awesome resumes with one of our template in just few seconds.
        </p>
        <Link
          className="bg-[#8910F1] font-nunito text-base font-bold py-4 px-6 text-white rounded-xl"
          to="/create"
        >
          Create Resume for free
        </Link>
      </div>
    </div>
  );
};
