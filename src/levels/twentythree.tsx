import { Circles, Instructions, Stars } from "../parts";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TwentyThree = () => {
  const [styles, setStyles] = useState<string>("");
  const ideal_style1 = "flex-direction:column-reverse;";
  const ideal_style2 = "align-content:center;";
  const ideal_style = ideal_style1.concat(ideal_style2);
  const yes: boolean =
    styles.replaceAll(" ", "").includes(ideal_style1) &&
    styles.replaceAll(" ", "").includes(ideal_style2);
  const navigate = useNavigate();
  return (
    <div className="w-screen md:flex flex-row-reverse">
      <div className="w-full p-2 pt-5 h-[400px] flex justify-center items-center md:h-screen bg-[#2c2c2c]">
        <div className="w-[300px] h-[300px]">
          <TargetContainer idealStyle={ideal_style.concat(" flex-wrap: wrap;")}>
            <Circles colors="gold" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#0894f1" />
            <Circles colors="gold" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#0894f1" />
            <Circles colors="gold" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#3dff8b" />
            <Circles colors="#0894f1" />
            <Container clientStyle={styles.concat(" flex-wrap: wrap;")}>
              <Stars colors="gold" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#0894f1" />
              <Stars colors="gold" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#0894f1" />
              <Stars colors="gold" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#3dff8b" />
              <Stars colors="#0894f1" />
            </Container>
          </TargetContainer>
        </div>
      </div>
      <div className="w-full pb-12 md:h-screen relative bg-[#ffde22]">
        <div>
          <Instructions
            level={23}
            first="Combine order with align-self to help the frogs to their destinations."
            second=""
          />
          <div className="w-11/12 md:mr-[30px] m-auto py-[20px] flex flex-col gap-[10px] bg-[#d1b61c] rounded-xl">
            <div className="ml-[20px] font-[600]"> {".stars {"} </div>
            <div className="ml-[35px]"> {"display: flex ;"} </div>
            <textarea
              onChange={(e) => {
                setStyles(e.target.value);
              }}
              className="w-[calc(100% - 40px)] p-2 focus:outline-none ml-[35px]"
            />
            <div className="ml-[20px] font-[600]"> {"}"} </div>
            <div className="flex justify-center">
              {yes ? (
                <button
                  onClick={() => {
                    navigate("/11");
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

export default TwentyThree;

const TargetContainer = styled.div<{ idealStyle: string }>`
  width: 100%;
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
