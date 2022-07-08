import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from './../components/Contact';
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

import banner from "../public/ide.png";

export default function Home() {
  return (
  <>
    <Section>
      <Header>
        <Title>
          Bonjour, je m appelle <br /> Ewen a.k.a Saï
        </Title>
        <SmallTitle>
          Développeur web <span>frontend</span>
        </SmallTitle>
        <Button href="/#a-propos">
          À propos de moi 
          <IoIosArrowDown className="arrow" />
        </Button>
      </Header>
      <ImgContainer>
        <Image src={banner} alt="banner" />
      </ImgContainer>
    </Section>
    <About />
    <Portfolio />
    <Contact />
  </>
  );
}

const Section = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  line-height: 80px;
  min-width: 700px;
`;

const Title = styled.h1`
  color: #eee;
  font-size: 4rem;
  font-family: "Ubuntu", sans-serif;
`;

const SmallTitle = styled.h2`
  font-size: 2rem;
  color: #bdbdbd;
  font-family: "Ubuntu", sans-serif;

  span {
    color: #a02dd7;
  }
`;

const blinkingAnimation = keyframes`
  0% { background: #A02DD7; }
  50% { background: #7826ED; }
  100% { background: #5800D7; }
}
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 200px;
  height: 45px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  background: #A02DD7;
  line-height: 0;
  text-decoration: none;
  transition animation 0.5s;

  .arrow {
    font-size: 18px;
    margin-left: 10px;
  }

  &:hover {
    transition animation: 0.5s;
    animation-name: ${blinkingAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

const ImgContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
`;
