import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const About = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  let title = useRef(null);
  let p1 = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const markers = false

    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        markers,
      },
      opacity: 0, 
      y: 100, 
      duration: 1,
    })

    gsap.from(p1, {
      scrollTrigger: {
        trigger: p1,
        markers,
      },
      opacity: 0, 
      y: 100, 
      duration: 1.5,
    })

  }, [])

  return (
    <Section id="a-propos">
      <h1 ref={el => {title = el}} >{ t('aboutme.title') }</h1>
      <p ref={el => {p1 = el}} >
      { t('aboutme.descriptions.first') }
        <br />
        <br />
        { t('aboutme.descriptions.second') }
        <br />
        <br />
        { t('aboutme.descriptions.third') }
        <br />
        <br />
        { t('aboutme.descriptions.fourth') }{' '}
        <Link href="/#contact">{ t('aboutme.descriptions.link') }</Link>
      </p>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  padding: 40px 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: clamp(40px, 6vw, 60px);
    color: #fff;
    margin-bottom: 40px;
    font-family: "Ubuntu", sans-serif;
  }

  p {
    color: #fff;
    font-size: clamp(10px, 5vw, 20px);
    width: 700px;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  a {
    color: #a02dd7;
  }
`;

export default About;
