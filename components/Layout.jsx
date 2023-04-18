import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Saï homepage" />
        <meta name="author" content="Saï" />
        <meta property="title" content="Saï - Développeur frontend" />
        <meta name="twitter:title" content="Saï" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Saipatatee" />
        <meta name="twitter:creator" content="@Saipatatee" />
        <meta name="twitter:image" content="https://ewha.fr/portfolio/sai.png"/>
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="Saï" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ewha.fr/portfolio/sai.png" />
        <meta name="keywords" content="ewen, saï, saipatate, web, developer, développeur, frontend, fantashop"
        />
        <title>Saï - Développeur frontend</title>
      </Head>

      <Navbar />

      <Container>{children}</Container>

      <Footer />
    </>
  );
};

const Container = styled.main`
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

export default Layout;
