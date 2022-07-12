import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <Section id="a-propos">
      <h1>{ t('aboutme.title') }</h1>
      <p>
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
