import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

import sai from "../../public/portfolio/sai.png";

const MyPortfolio = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  let img = useRef(null);
  let t1 = useRef(null);
  let txt = useRef(null);
  let t2 = useRef(null);
  let icon = useRef(null);
  let btn = useRef(null);

  useEffect(() => {

    gsap.from(img, {
      opacity: 0, 
      x: -100, 
      duration: 1,
    })

    gsap.from(t1, {
      opacity: 0, 
      y: 100, 
      duration: 1,
      delay: 1.2,
    })

    gsap.from(txt, {
      opacity: 0, 
      y: 100, 
      duration: 1,
      delay: 1.4,
    })

    gsap.from(t2, {
      opacity: 0, 
      y: 100, 
      duration: 1,
      delay: 1.6,
    })

    gsap.from(icon, {
      opacity: 0, 
      x: 100, 
      duration: 1,
      delay: 1.6,
    })

    gsap.from(btn, {
      opacity: 0, 
      y: 100, 
      duration: 1,
      delay: 1.8,
    })

  }, [])

  return (
    <Section>
      <div className="links">
        <Link href="/#portfolio">Portfolio</Link>
        <FaChevronRight style={{ fontSize: "12px", margin: "0 10px" }} />
        <span>Mon Portfolio</span>
      </div>
      <Container>
        <div className="left" ref={el => {img = el}}>
          <Image className="banner" src={sai} alt="fantashop" layout="responsive" />
        </div>
        <div className="right">
          <h1 ref={el => {t1 = el}}>Mon Portfolio</h1>
          <p ref={el => {txt = el}}>
            { t('me.description') }
          </p>
          <div className="techno">
            <h1 ref={el => {t2 = el}}>{ t('me.title') }</h1>
            <div className="icons" ref={el => {icon = el}}>
              <a
                href="https://fr.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/react.png" alt="icons" />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <img src="/icons/next.svg" alt="icons" />
              </a>
              <a
                href="https://styled-components.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/sc.png" alt="icons" />
              </a>
              <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
                <img src="/icons/framer.svg" alt="icons" />
              </a>
              <a href="https://greensock.com/" target="_blank" rel="noreferrer">
                <img src="/icons/gsap.png" alt="icons" />
              </a>
            </div>
          </div>
          <a
            ref={el => {btn = el}}
            className="link"
            href="https://github.com/Saipatate/Portfolio-V2"
            target="_blank"
            rel="noreferrer"
          >
            { t('me.button') }
          </a>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1200px;
  color: #fff;

  .links {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    a {
      color: #7826ed;
    }

    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1250px) {
    max-width: 800px;
  }
`;

const Container = styled.div`
  display: flex;

  .left {
    width: 700px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #fff;

    .banner {
      border-radius: 10px;
    }

    @media screen and (max-width: 1250px) {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  .right {
    margin-left: 50px;
    width: 600px;
    height: 100%;

    h1 {
      text-transform: uppercase;
      font-size: 20px;
      color: #bc39ff;
      font-weight: 600;
      margin-bottom: 20px;
    }

    p {
      color: #ffffffc7;
      margin-bottom: 40px;
    }

    .techno {
      display: flex;
      flex-direction: column;
      align-items flex-end;
      margin-bottom: 20px;

      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        
        img {
          width: 50px;
          height: 50px;
          background: #fff;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          transition: 0.4s;

          &:hover {
            transform: translateY(-10px);
            transition: 0.4s;
          }
        }

        @media screen and (max-width: 450px) {
          margin: 0 auto;
        }
      }

      @media screen and (max-width: 450px) {
        margin-bottom: 40px;
      }
    }

    .link {
      background: #9200cf;
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    @media screen and (max-width: 1250px) {
      width: 100%;
      margin-left: 0;
    }

    @media screen and (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default MyPortfolio;
