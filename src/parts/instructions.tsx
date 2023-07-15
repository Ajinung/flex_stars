type iInstruct = {
  level: number;
  first: string;
  second: string;
  third?: string;
};

const Instructions: React.FC<iInstruct> = ({ level, first, second, third }) => {
  return (
    <div className="w-11/12  md:mr-[30px] m-auto py-[20px] flex flex-col gap-[20px]">
      <div className="flex justify-between items-center">
        <div className="text-[25px] font-[600]">Stars In Circles</div>
        <div className="py-1 px-3 rounded-md flex justify-center items-center bg-[#dbbc0d]">
          <div>
            Level <span className="font-[600]">{`${level}`}</span> 0f{" "}
            <span className="font-[600]">24</span>{" "}
          </div>
        </div>
      </div>
      <div>{first}</div>
      <div className="font-[600]">{second}</div>
      <div>{third}</div>
    </div>
  );
};

export default Instructions;
