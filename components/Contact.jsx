import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Contact = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <Section id="contact">
      <h1>
        {t("contact.title")}
      </h1>
        <div className="container">
        <motion.a
          href="https://twitter.com/Saipatatee"
          target="_blank"
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter style={{fontSize: "25px"}} />
        </motion.a>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDiscord style={{fontSize: "25px"}} />
        </motion.button>
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
