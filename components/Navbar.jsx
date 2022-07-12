import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useTranslation("fr", { useSuspense: false });

  const handleClick = () => {
    setIsMobile(!isMobile)
  }

  return (
    <>
      <Nav>
        <Burger
          onClick={handleClick}
          isMobile={isMobile}
        >
          <span></span>
        </Burger>
        <BurgerMenu
          isMobile={isMobile}
        >
          <a href="#" onClick={() => setIsMobile(false)} >{ t('menu.home') }</a>
          <a href="#a-propos" onClick={() => setIsMobile(false)} >{ t('menu.about') }</a>
          <a href="#portfolio" onClick={() => setIsMobile(false)} >{ t('menu.portfolio') }</a>
          <a href="#contact" onClick={() => setIsMobile(false)} >{ t('menu.contact') }</a>
        </BurgerMenu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;

  @media screen and (max-width: 500px) {
    justify-content: flex-end;
  }
`;

const BurgerMenu = styled.div`
  a {
    text-decoration: none;
    color: #eee;
    margin: 0 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      bottom: -5px;
      background: #7826ed;
      transform: scale(0, 1);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    align-items: center;
    width: 100%;
    height: ${props => props.isMobile ? "180px" : "0"};
    background: #110010;
    left: 0;
    z-index: 9;
    overflow: hidden;
    transition: height 0.4s;

    a {
      margin: 8px 0;
    }
  }
`

const Burger = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 500px) {
    display: block;

    & span {
      background: ${props => props.isMobile ? "transparent" : "#fff"};
      position: absolute;
      width: 100%;
      height: 3px;
      top: 50%;
      transform: translateY(-50%);
      transition: background 0.4s;
  
      &::before {
        background: #fff;
        transform: ${props => props.isMobile && "rotate(45deg)"};
        margin-top: ${props => props.isMobile ? "0" : "10px"};
        content: '';
        position: absolute;
        width: ${props => props.isMobile ? "100%" : "50%"};
        height: 3px;
        transition: transform 0.4s, margin 0.4s, width 0.4s;
      }
  
      &::after {
        background: #fff;
        transform: ${props => props.isMobile && "rotate(-45deg)"};
        margin-top: ${props => props.isMobile ? "0" : "-10px"};
        content: '';
        position: absolute;
        width: ${props => props.isMobile ? "100%" : "50%"};
        height: 3px;
        right: 0;
        transition: transform 0.4s, margin 0.4s, width 0.4s;
      }
  }
}
`

export default Navbar;
