type iCircles = {
  colors: string;
  styling?: string;
};
import styled from "styled-components";

const Circles: React.FC<iCircles> = ({ colors, styling }) => {
  return <Circuit cl={colors} stl={styling} />;
};

export default Circles;

const Circuit = styled.div<{ cl: string; stl?: string }>`
  border: 3px solid ${({ cl }) => cl};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ stl }) => stl}
`;
