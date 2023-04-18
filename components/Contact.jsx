import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Socials from "./Socials";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  let title = useRef();
  let socials = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
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
  
      gsap.from(socials, {
        scrollTrigger: {
          trigger: socials,
          markers,
        },
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 1.5
      })
    })
    return () => ctx.revert()

  }, [])

  return (
    <Section id="contact">
      <h1 ref={el => {title = el}}>
        Me contacter
      </h1>
        <div className="container" ref={el => {socials = el}}>
          <Socials />
        </div>
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

  h1 {
    font-size: clamp(40px, 6vw, 60px);
    color: #fff;
    margin-bottom: 80px;
    font-family: "Ubuntu", sans-serif;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btn {
    display: flex;
    align-items: center;
    padding: 12px;
    background: transparent;
    color: #fff;
    font-weight: 500;
    border-radius: 10px;
    border: 2px solid #9200cf;
    cursor: pointer;
  }
  }
`;

export default Contact;
