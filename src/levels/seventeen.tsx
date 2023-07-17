import { Circles, Instructions, Stars } from "../parts";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Seventeen = () => {
  const [styles, setStyles] = useState<string>("");
  const ideal_style1 = `order:1;`;
  const ideal_style11 = `order:2;`;
  const ideal_style12 = `order:3;`;
  const ideal_style13 = `order:4;`;
  const ideal_style2 = "align-self:end;";
  const ideal_style3 = "align-self:flex-end;";
  const ideal_style = (
    ideal_style1 ||
    ideal_style11 ||
    ideal_style12 ||
    ideal_style13
  ).concat(ideal_style2 || ideal_style3);
  const yes: boolean =
    (styles.replaceAll(" ", "").includes(ideal_style1) ||
      styles.replaceAll(" ", "").includes(ideal_style11) ||
      styles.replaceAll(" ", "").includes(ideal_style12) ||
      styles.replaceAll(" ", "").includes(ideal_style13)) &&
    (styles.replaceAll(" ", "").includes(ideal_style2) ||
      styles.replaceAll(" ", "").includes(ideal_style3));
  const navigate = useNavigate();
  return (
    <div className="w-screen md:flex flex-row-reverse">
      <div className="w-full flex justify-center items-center p-2 pt-5 h-[400px] md:h-screen bg-[#2c2c2c]">
        <div className="w-[60%] h-[60%]">
          <TargetContainer idealStyle="display: flex; align-items: flex-start;">
            <Circles styling={ideal_style} colors="#3dff8b" />
            <Circles colors="gold" />
            <Circles styling={ideal_style} colors="#3dff8b" />
            <Circles colors="gold" />
            <Circles colors="gold" />
            <Container clientStyle="display: flex; align-items: flex-start;">
              <Stars styling={styles} colors="#3dff8b" />
              <Stars colors="gold" />
              <Stars styling={styles} colors="#3dff8b" />
              <Stars colors="gold" />
              <Stars colors="gold" />
            </Container>
          </TargetContainer>
        </div>
      </div>
      <div className="w-full pb-12 md:h-screen relative bg-[#ffde22]">
        <div>
          <Instructions
            level={17}
            first="Combine order with align-self to help eniola to their destinations."
            second=""
          />
          <div className="w-11/12 md:mr-[30px] m-auto py-[20px] flex flex-col gap-[10px] bg-[#d1b61c] rounded-xl">
            <div className="ml-[20px] font-[600]"> {".stars {"} </div>
            <div className="ml-[35px]"> {"display: flex ;"} </div>
            <div className="ml-[35px]"> {"align-items: flex-start;"} </div>
            <div className="ml-[20px] font-[600]"> {"}"} </div>
            <div className="ml-[20px]"> {".green {"} </div>
            <textarea
              onChange={(e) => {
                setStyles(e.target.value);
              }}
              className="w-[calc(100% - 40px)] p-2 focus:outline-none ml-[35px]"
            />
            <div className="ml-[20px]"> {"}"} </div>
            <div className="flex justify-center">
              {yes ? (
                <button
                  onClick={() => {
                    navigate("/18");
                  }}
                  className="bg-[green] rounded-[4px] text-slate-50 py-1 px-3 transition-all duration-[350ms] cursor-pointer hover:outline-none focus:outline-none">
                  NEXT
                </button>
              ) : (
                <button className="bg-[silver] rounded-[4px] text-slate-500 py-1 px-3 transition-all duration-[350ms] cursor-not-allowed hover:outline-none focus:outline-none">
                  NEXT
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 absolute bottom-[7px] mt-4 mr-[30px] flex justify-center m-auto">
          @latest
        </div>
      </div>
    </div>
  );
};

export default Seventeen;

const TargetContainer = styled.div<{ idealStyle: string }>`
  width: 91.666667%;
  margin: auto;
  margin-right: 30px;
  height: 100%;
  position: relative;
  transition: all 350ms;
  display: flex;
  gap: 10px;
  ${({ idealStyle }) => idealStyle}
`;
const Container = styled.div<{ clientStyle: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 350ms;
  display: flex;
  gap: 10px;
  ${({ clientStyle }) => clientStyle}
`;
