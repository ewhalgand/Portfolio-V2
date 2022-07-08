import Link from "next/link";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="a-propos">
      <h1>A propos</h1>
      <p>
        Je m'appelle Ewen, je suis développeur français de 17 ans
        <br />
        <br />
        Je suis développeur frontend depuis 2 ans et j'apprend en se moment le
        développement backend
        <br />
        <br />
        Je suis un amoureux de React et Next.js mais je suis intéressé par de
        nombreuse autres technologie, pour du développement frontend et backend
        <br />
        <br />
        Si mon profil vous intéresse, n'hésitez pas à me{" "}
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
  }

  a {
    color: #a02dd7;
  }
`;

export default About;
