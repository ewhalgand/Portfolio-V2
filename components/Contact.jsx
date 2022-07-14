import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Contact = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  let title = useRef(null);
  let i1 = useRef(null);
  let i2 = useRef(null);
  let i3 = useRef(null);
  let i4 = useRef(null);

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

    gsap.from(i1, {
      scrollTrigger: {
        trigger: i1,
        markers,
      },
      opacity: 0, 
      x: -100, 
      duration: 1,
    })

    gsap.from(i2, {
      scrollTrigger: {
        trigger: i2,
        markers,
      },
      opacity: 0, 
      x: 100, 
      duration: 1,
      delay: 1.5
    })

    gsap.from(i3, {
      scrollTrigger: {
        trigger: i3,
        markers,
      },
      opacity: 0, 
      y: 100, 
      duration: 1,
      dalay: 2
    })

    gsap.from(i4, {
      scrollTrigger: {
        trigger: title,
        markers,
      },
      opacity: 0, 
      y: 100, 
      duration: 1,
      delay: 2.5
    })

  }, [])

  return (
    <Section id="contact">
      <h1 ref={el => {title = el}}>{ t('contact.title') }</h1>
      <form action="">
        <div className="container">
          <input
            ref={el => {i1 = el}}
            type="text"
            name="name"
            placeholder="Enter votre Nom"
            required
          />
          <input
            ref={el => {i2 = el}}
            type="text"
            name="email"
            placeholder="Entrer votre Email"
            required
          />
        </div>
        <textarea
          ref={el => {i3 = el}}
          className="description"
          rows={8}
          placeholder="Enter votre message"
          required
        ></textarea>
        <motion.button
          ref={el => {i4 = el}}
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >{ t('contact.button') }</motion.button>
      </form>
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap: 20px;

    .container {
      display: flex;
      width: 100%;
      gap: 20px;

      input {
        width: 100%;
        padding: 8px;
        font-size: 0.9rem;
        outline: none;
        border-radius: 10px;
        border: 2px solid #9200cf;
      }

      @media screen and (max-width: 470px) {
        flex-direction: column;
      }
    }

    .description {
      width: 100%;
      padding: 8px;
      resize: none;
      outline: none;
      border-radius: 10px;
      border: 2px solid #9200cf;
    }

    .btn {
      width: 150px;
      padding: 6px 12px;
      background: transparent;
      color: #fff;
      font-weight: 500;
      border-radius: 10px;
      border: 2px solid #9200cf;
      cursor: pointer;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }
`;

export default Contact;
