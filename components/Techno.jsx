import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Techno = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <Section>
      <h1>{ t('techno.title') }</h1>
      <Container>
        <h2>Html</h2>
        <h2>Css</h2>
        <h2>Scss</h2>
        <h2>Tailwind</h2>
        <h2>Bulma</h2>
        <h2>Styled Components</h2>
        <h2>Javascript</h2>
        <h2>Typescript</h2>
        <h2>React</h2>
        <h2>Next</h2>
        <h2>Strapi</h2>
        <h2>Sanity</h2>
        <h2>Greensock</h2>
        <h2>Framer Motion</h2>
        <h2>Figma</h2>
        <h2>Git</h2>
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
