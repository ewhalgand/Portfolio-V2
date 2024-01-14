import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  let title = useRef();
  let box = useRef();
  let box2 = useRef();
  let box3 = useRef();
  let box4 = useRef();

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
  
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      })
  
      gsap.from(box2, {
        scrollTrigger: {
          trigger: box2,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
      })
  
      gsap.from(box3, {
        scrollTrigger: {
          trigger: box3,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 2,
      })

      gsap.from(box4, {
        scrollTrigger: {
          trigger: box4,
          markers,
        },
        opacity: 0,
        y: 100,
        duration: 2.5,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section id="portfolio">
      <h1 ref={el => {title = el}} >Portfolio</h1>
      <Container>
        <Box ref={el => {box = el}}>
          <img className="banner" src="/portfolio/fts.webp" alt="fantashop" />
          <h2>FantaShop</h2>
          <a href="https://github.com/Saipatate/FantaShop_Site" target="_blank" rel="noreferrer">Voir plus</a>
          <Link href="/works/fantashop">En savoir plus</Link>
        </Box>
        <Box ref={el => {box2 = el}}>
          <img className="banner" src="/portfolio/byoss.webp" alt="fantashop" />
          <h2>Byoss.me</h2>
          <a href="https://byoss.me/" target="_blank" rel="noreferrer">Voir plus</a>
          <Link href="/works/byoss">En savoir plus</Link>
        </Box>
        <Box ref={el => {box3 = el}}>
          <img className="banner" src="/portfolio/portfolio.webp" alt="fantashop" />
          <h2>Mon Portfolio</h2>
          <a href="https://github.com/Saipatate/Portfolio-V2" target="_blank" rel="noreferrer">Voir plus</a>
          <Link href="/works/my-portfolio">En savoir plus</Link>
        </Box>
        <Box ref={el => {box4 = el}}>
          <img className="banner" style={{border: "2px solid #fff"}} src="/portfolio/my-blog.webp" alt="fantashop" />
          <h2>My Blog</h2>
          <a href="https://github.com/Saipatate/Blog-app" target="_blank" rel="noreferrer">Voir plus</a>
          <Link href="/works/my-blog">En savoir plus</Link>
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
  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 400px;
  background: #efefef;
  padding: 15px;
  border-radius: 8px;

  .banner {
    border-radius: 8px;
    width: 100%;
    height: 179px;

    @media screen and (max-width: 600px) {
      height: max-content;
    }
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
