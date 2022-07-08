import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

import byoss from "../../public/portfolio/byoss.png";

const FantashopDetails = () => {
  return (
    <Section>
      <div className="links">
        <Link href="/#portfolio">Portfolio</Link>
        <FaChevronRight style={{ fontSize: "12px", margin: "0 10px" }} />
        <span>Byoss.me</span>
      </div>
      <Container>
        <div className="left">
          <Image className="banner" src={byoss} alt="fantashop" />
        </div>
        <div className="right">
          <h1>Byoss.me</h1>
          <p>
            Byoss.me est un réseau social pour lles professionnels ou particuliers dans le style de Linkedin
          </p>
          <div className="techno">
            <h1>Téchnologies utilisées</h1>
            <div className="icons">
              <a
                href="https://fr.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/react.png" alt="icons" />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <img src="/icons/next.svg" alt="icons" />
              </a>
              <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                <img src="/icons/node.svg" alt="icons" />
              </a>
            </div>
          </div>
          <a
            className="link"
            href="https://fantashop.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Visiter le site
          </a>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1200px;
  color: #fff;

  .links {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    a {
      color: #7826ed;
    }

    span {
      font-weight: 600;
    }
  }
`;

const Container = styled.div`
  display: flex;

  .left {
    width: 700px;

    .banner {
      border-radius: 10px;
    }
  }

  .right {
    margin-left: 50px;
    width: 600px;
    height: 100%;

    h1 {
      text-transform: uppercase;
      font-size: 20px;
      color: #bc39ff;
      font-weight: 600;
      margin-bottom: 20px;
    }

    p {
      color: #ffffffc7;
      margin-bottom: 40px;
    }

    .techno {
      display: flex;
      flex-direction: column;
      align-items flex-end;
      margin-bottom: 20px;

      .icons {
        display: flex;
        align-items: center;
        gap: 20px;
        
        img {
          width: 50px;
          height: 50px;
          background: #fff;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          transition: 0.4s;

          &:hover {
            transform: translateY(-10px);
            transition: 0.4s;
          }
        }
      }
    }

    .link {
      background: #9200cf;
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;

export default FantashopDetails;