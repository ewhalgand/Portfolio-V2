import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">Accueil</Link>
      <Link href="/#a-propos">À propos</Link>
      <Link href="/#portfolio">Portfolio</Link>
      <Link href="/#contact">Me Contacter</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

export default Navbar;
