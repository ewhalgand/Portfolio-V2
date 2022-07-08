import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import fts from "../public/portfolio/fts.png";
import byoss from "../public/portfolio/byoss.png";
import sai from "../public/portfolio/sai.png";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <h1>Portfolio</h1>
      <Container>
        <Box>
          <Image className="banner" src={fts} alt="fantashop" />
          <h2>FantaShop</h2>
          <a href="https://fantashop.fr/" target="_blank" rel="noreferrer">Voire plus</a>
          <Link href="/works/fantashop">En savoir plus</Link>
        </Box>
        <Box>
          <Image className="banner" src={byoss} alt="fantashop" />
          <h2>Byoss.me</h2>
          <a href="https://www.byoss.me/fr/coming-soon" target="_blank" rel="noreferrer">Voire plus</a>
          <Link href="/works/byoss">En savoir plus</Link>
        </Box>
        <Box>
          <Image className="banner" src={sai} alt="fantashop" />
          <h2>Mon Portfolio</h2>
          <a href="https://github.com/Saipatate/Portfolio-V2" target="_blank" rel="noreferrer">Voire plus</a>
          <Link href="">En savoir plus</Link>
        </Box>
      </Container>
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
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const Box = styled.div`
  width: 400px;
  background: #efefef;
  padding: 15px;
  border-radius: 10px;

  .banner {
    border-radius: 10px;
  }

  h2 {
    color: #242424;
    margin-bottom: 20px;
  }

  a {
    margin-right: 20px;
    background: #9200cf;
    color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export default Portfolio;
