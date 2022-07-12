import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import fts from "../public/portfolio/fts.png";
import byoss from "../public/portfolio/byoss.png";
import sai from "../public/portfolio/sai.png";

const Portfolio = () => {

  const { t } = useTranslation("fr", { useSuspense: false });

  return (
    <Section id="portfolio">
      <h1>Portfolio</h1>
      <Container>
        <Box>
          <Image className="banner" src={fts} alt="fantashop" />
          <h2>FantaShop</h2>
          <a href="https://fantashop.fr/" target="_blank" rel="noreferrer">{ t('portfolio.button.seemore') }</a>
          <Link href="/works/fantashop">{ t('portfolio.button.findoutmore') }</Link>
        </Box>
        <Box>
          <Image className="banner" src={byoss} alt="fantashop" />
          <h2>Byoss.me</h2>
          <a href="https://www.byoss.me/fr/coming-soon" target="_blank" rel="noreferrer">{ t('portfolio.button.seemore') }</a>
          <Link href="/works/byoss">{ t('portfolio.button.findoutmore') }</Link>
        </Box>
        <Box>
          <Image className="banner" src={sai} alt="fantashop" />
          <h2>Mon Portfolio</h2>
          <a href="https://github.com/Saipatate/Portfolio-V2" target="_blank" rel="noreferrer">{ t('portfolio.button.seemore') }</a>
          <Link href="/works/my-portfolio">{ t('portfolio.button.findoutmore') }</Link>
        </Box>
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
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  @media screen and (max-width: 350px) {
    a {
      font-size: 13.8px;
    }
  }
`;

export default Portfolio;
