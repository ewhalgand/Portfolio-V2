import { useLayoutEffect,useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let title = useRef();
  let p1 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      const markers = false;

      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });

      gsap.from(p1, {
        scrollTrigger: {
          trigger: p1,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
      });
    }, title, p1);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="a-propos">
      <h1
        ref={(el) => {
          title = el;
        }}
      >
        A propos
      </h1>
      <p
        ref={(el) => {
          p1 = el;
        }}
      >
        Je m&apos;appelle Ewen, je suis un développeur web français de 18 ans
        <br />
        <br />
        Je suis développeur frontend depuis presque 3 ans et développeur backend novice
        <br />
        <br />
        Je suis un amoureux de React et Next.js, mais je suis intéressé par de
        nombreuses autres technologies, pour du développement frontend et backend
        <br />
        <br />
        Si mon profil vous intéresse, n&apos;hésitez pas à me{" "}
        <Link href="/#contact">contacter</Link>
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
