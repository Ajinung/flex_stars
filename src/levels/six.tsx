import { Circles, Instructions, Stars } from "../parts";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Six = () => {
  const [styles, setStyles] = useState<string>("");
  const ideal_style1 = "align-items:center;";
  const ideal_style2 = "justify-content:center;";
  const ideal_style = ideal_style1.concat(ideal_style2);
  const yes: boolean =
    styles.replaceAll(" ", "").includes(ideal_style1) &&
    styles.replaceAll(" ", "").includes(ideal_style2);
  const navigate = useNavigate();
  return (
    <div className="w-screen lg:flex flex-row-reverse">
      <div className="w-full p-2 pt-5 h-[400px] lg:h-screen bg-[#2c2c2c]">
        <TargetContainer idealStyle={ideal_style}>
          <Circles colors="gold" />
          <Container clientStyle={styles}>
            <Stars colors="gold" />
          </Container>
        </TargetContainer>
      </div>
      <div className="w-full pb-12 lg:h-screen relative bg-[#ffde22]">
        <div>
          <Instructions
            level={6}
            first="Lead the star to the circle at the center using a combination of justify-content and align-items."
            second=""
          />
          <div className="w-11/12 mr-[30px] m-auto py-[20px] flex flex-col gap-[10px] bg-[#d1b61c] rounded-xl">
            <div className="ml-[20px] font-[600]"> {".stars {"} </div>
            <div className="ml-[35px]"> {"display: flex ;"} </div>
            <textarea
              onChange={(e) => {
                setStyles(e.target.value);
              }}
              className="w-11/12 p-2 focus:outline-none ml-[35px]"
            />
            <div className="ml-[20px] font-[600]"> {"}"} </div>
            <div className="flex justify-center">
              {yes ? (
                <button
                  onClick={() => {
                    navigate("/7");
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

export default Six;

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
