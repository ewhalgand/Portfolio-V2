import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Techno = () => {
  let title = useRef();

  let tech = [
    "Html",
    "Css",
    "Scss",
    "Tailwind",
    "Styled Components",
    "Stitches",
    "Javascript",
    "Typescript",
    "React",
    "Next",
    "Express",
    "MongoDB",
    "Strapi",
    "Sanity",
    "Greensock",
    "Framer Motion",
    "Figma",
    "Git",
  ];

  useEffect(() => {
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

      gsap.from(".item", {
        scrollTrigger: {
          trigger: "#use",
          start: "center bottom",
          end: "+=500",
          scrub: true,
        },
        opacity: 0,
        y: "100%",
        ease: "power4.out",
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <h1 ref={(el) => {title = el;}}>Outils et Technologies utilisés</h1>
      <Container id="use">
        {tech.map(item => {
          return <h2 key={item} className="item">{item}</h2>
        })}
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  padding: 20px 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(40px, 6vw, 60px);
    color: #fff;
    margin-bottom: 80px;
    font-family: "Ubuntu", sans-serif;
    text-align: center;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  h2 {
    color: #d7d7d7;
    font-weight: 500;
  }
`;

export default Techno;
