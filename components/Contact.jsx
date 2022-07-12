import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <Section id="contact">
      <h1>{ t('contact.title') }</h1>
      <form action="">
        <div className="container">
          <input
            type="text"
            name="name"
            placeholder="Enter votre Nom"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Entrer votre Email"
            required
          />
        </div>
        <textarea
          className="description"
          rows={8}
          placeholder="Enter votre message"
          required
        ></textarea>
        <motion.button
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
