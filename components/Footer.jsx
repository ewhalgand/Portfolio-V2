import styled from "styled-components";

const Footer = () => {
    return ( 
        <FooterContainer>
            &copy; 2022 - Ewen
        </FooterContainer>
     );
}

const FooterContainer = styled.footer`
    text-align: center;
    color: #444;
    margin: 20px 0;
    font-size: 1.1rem;
    font-weight: 600;
`
 
export default Footer;