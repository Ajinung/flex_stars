import { useNavigate } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import bad from "../assets/badge.png";
import { Conf } from ".";

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="absolute w-full h-full">
        <Conf />
      </div>
      <div className="w-[88%] sm:w-[500px]">
        <div className="h-fit pb-20 w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-400 flex flex-col items-center">
          <div className="h-[230px] relative w-full bg-gradient rounded-bl-[150px] rounded-br-[150px]">
            <div className="absolute top-5 left-5 text-[gold]">
              <IoSparklesSharp />
            </div>
            <div className="absolute text-[7px] top-20 left-10 text-[red]">
              <BsFillCircleFill />
            </div>
            <div className="absolute text-[7px] top-20 right-10 text-[white]">
              <BsFillCircleFill />
            </div>
            <div className="absolute bottom-20 left-20 text-[white]">
              <IoSparklesSharp />
            </div>
            <div className="absolute text-[7px] top-32 left-48 text-[red]">
              <BsFillCircleFill />
            </div>
            <div className="absolute top-32 right-20 text-[gold]">
              <IoSparklesSharp />
            </div>
            <div className="absolute top-36 right-32 text-[red]">
              <IoSparklesSharp />
            </div>
            <div className="absolute text-[7px] top-11 left-64 text-[red]">
              <BsCircle />
            </div>
            <div className="absolute top-5 right-5 text-[red]">
              <BsCircle />
            </div>
            <div className="absolute bottom-52 right-24 text-[gold]">
              <IoSparklesSharp />
            </div>
            <div className="absolute bottom-40 left-52 text-[red]">
              <IoSparklesSharp />
            </div>
            <div className="absolute top-8 left-32 text-[gold]">
              <BsCircle />
            </div>
            <div className="absolute top-10 right-32 text-[white]">
              <BsCircle />
            </div>
          </div>
          <div className="w-[230px] top-[201px] absolute h-[250px]">
            <img className="w-full h-full" src={bad} />
          </div>
          <div className="flex-1 mt-5 flex-col justify-center items-center text-center">
            <div className="text-xl font-[600] mb-2 my-4">Congratulations</div>
            <div className="text-sm flex flex-col gap-1 text-[600] text-gray-400">
              <div>You did a great job completing all levels</div>
              <div>Would you like to play again?</div>
            </div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-purple-600 absolute right-[40%] left-[40%] md:right-[44%] md:left-[44%] mt-4 text-sm rounded-[4px] text-slate-50 py-1 px-3 transition-all duration-[350ms] cursor-pointer hover:outline-none focus:outline-none">
              Yes I would
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
