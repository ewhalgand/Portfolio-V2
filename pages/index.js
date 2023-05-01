import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Techno from "../components/Techno";
import Contact from "./../components/Contact";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";

import banner from "../public/ide.png";

export default function Home() {
  let bigTitle = useRef();
  let smallTitle = useRef();
  let btn = useRef();
  let img = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
    if (window.innerWidth > 500) {
      gsap.from(bigTitle, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: 140,
      });

      gsap.from(smallTitle, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: 140,
        delay: 0.5,
      });

      gsap.from(btn, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: 140,
        delay: 1,
      });
    } else {
      gsap.from(bigTitle, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: -140,
        delay: 0.5,
      });

      gsap.from(smallTitle, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: -140,
        delay: 1,
      });

      gsap.from(btn, {
        duration: 1.5,
        opacity: 0,
        ease: "bounce",
        x: -140,
        delay: 1.5,
      });
    }

    gsap.from(img, {
      x: 140,
      opacity: 0,
      ease: "elastic",
      duration: 2,
    });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Section>
        <Header>
          <Title
            ref={(el) => {
              bigTitle = el;
            }}
          >
            Bonjour, je m&apos;appelle <br /> Ewen Halgand
          </Title>
          <SmallTitle
            ref={(el) => {
              smallTitle = el;
            }}
          >
            Développeur web <span>frontend</span>
          </SmallTitle>
          <motion.a
            ref={(el) => {
              btn = el;
            }}
            className="btn"
            href="/#a-propos"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            À props de moi
            <IoIosArrowDown className="arrow" />
          </motion.a>
        </Header>
        <ImgContainer
          ref={(el) => {
            img = el;
          }}
        >
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
  height: 100%;
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
    min-width: auto;
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
  margin-top: 140px;
  width: 60%;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }

  @media screen and (max-width: 1220px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
