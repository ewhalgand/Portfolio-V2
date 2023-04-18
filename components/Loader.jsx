import styled, { keyframes } from "styled-components";

const Loader = () => {
  return <Load>Attendez un peu</Load>;
};

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Load = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    height: 190px;
    width: 190px;
    border-radius: 50%;
    animation-name: ${rotateAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;

export default Loader;
