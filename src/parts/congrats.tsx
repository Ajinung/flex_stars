import { useNavigate } from "react-router-dom";

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[88%] ">
        <div className="relative h-[400px] w-full rounded-3xl shadow-2xl shadow-slate-400">
          <div className="flex py-10 justify-center items-center bg-white"></div>
          <div className="absolute rounded-tr-3xl flex flex-col gap-5 items-center rounded-tl-3xl overflow-hidden top-0 left-0 h-[300px] w-full">
            <div className="h-[200px] w-full bg-gray-300 rounded-b-[1000px]" />
            <div className="flex flex-col justify-center items-center text-center">
              <div className="text-xl font-[600] my-4">Congratulations</div>
              <div className="text-sm flex flex-col gap-2 text-gray-500">
                <div>You did a great job completing all levels</div>
                <div>Would you like to play again?</div>
              </div>
              <button
                onClick={() => {
                  navigate("/1");
                }}
                className="bg-[green] text-sm mt-2 rounded-[4px] text-slate-50 py-1 px-3 transition-all duration-[350ms] cursor-pointer hover:outline-none focus:outline-none">
                Yes I would
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
