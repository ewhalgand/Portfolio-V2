import styled, { keyframes } from "styled-components";

const Loader = () => {
  return <Load>Attendez un peu :)</Load>;
};

const Load = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 18px;
`;

export default Loader;
