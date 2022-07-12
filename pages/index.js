import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Techno from "../components/Techno";
import Contact from "./../components/Contact";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

import banner from "../public/ide.png";

export default function Home() {
  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <>
      <Section>
        <Header>
          <Title>
            {t("homepage.bigtitle")} <br /> Ewen a.k.a Saï
          </Title>
          <SmallTitle>
            {t("homepage.smalltitle")} <span>frontend</span>
          </SmallTitle>
          <motion.a
            className="btn"
            href="/#a-propos"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t("homepage.button")}
            <IoIosArrowDown className="arrow" />
          </motion.a>
        </Header>
        <ImgContainer>
          <Image src={banner} alt="banner" />
        </ImgContainer>
      </Section>
      <About />
      <Portfolio />
      <Techno />
      <Contact />
    </>
  );
}

const Section = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1720px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
  }
`;

const blinkingAnimation = keyframes`
  0% { background: #A02DD7; }
  50% { background: #7826ED; }
  100% { background: #5800D7; }
}
`;

const Header = styled.div`
  min-width: 700px;

  .btn {
  display: flex;
  justify-content: center;
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
  margin-bottom: 30px;
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
  }

  @media screen and (max-width: 1720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    min-width: 100%;
  }
`;

const Title = styled.h1`
  color: #eee;
  font-size: clamp(40px, 7vw, 4rem);
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 20px;
`;

const SmallTitle = styled.h2`
  font-size: clamp(20px, 4vw, 2rem);
  color: #bdbdbd;
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 20px;

  span {
    color: #a02dd7;
  }
`;

const ImgContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1220px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
