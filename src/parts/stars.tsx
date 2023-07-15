import { AiFillStar } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

type iStar = {
  colors: string;
  styling?: string;
};

const Stars: React.FC<iStar> = ({ colors, styling }) => {
  return (
    <Starling stl={styling}>
      <div
        style={{ color: `${colors}`, fontSize: "30px" }}
        className={`w-full h-full flex justify-center items-center rounded-[50%]`}>
        <Star>
          <AiFillStar />
        </Star>
      </div>
    </Starling>
  );
};

export default Stars;

const Starling = styled.div<{ stl?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ stl }) => stl}
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.85);
  }
  50% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(0.85);
  }
`;

const Star = styled.div`
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-iteration-count: infinite;
`;
