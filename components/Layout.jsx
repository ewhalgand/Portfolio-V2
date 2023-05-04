import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Loader from './Loader';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        {/* <link rel="icon" type="image/svg+xml" href="/img/logo.png" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6c00c4"/>
        <meta name="title" content="Ewen HALGAND - Développeur Frontend"/>
        <meta name="author" content="Ewen HALGAND" />
        <meta property="site_name" content="Ewen HALGAND" />
        <meta name="description" content="Découvrez à travers mon portfolio qui je suis et ce que je fais."/>
        
        <meta property="og:site_name" content="Ewen HALGAND" />
        <meta property="og:title" content="Ewen HALGAND - Développeur Frontend"/>
        <meta property="og:description" content="Découvrez à travers mon portfolio qui je suis et ce que je fais."/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Ewen HALGAND - Développeur Frontend"/>
        <meta property="twitter:description" content="Découvrez à travers mon portfolio qui je suis et ce que je fais."/>
        <title>Ewen HALGAND - Développeur frontend</title>
      </Head>

      <Navbar />


      {isLoading ? <Loader /> : <Container>{children}</Container>}

      <Footer />
    </>
  );
};

const Container = styled.main`
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  max-width: 1920px;
`;

export default Layout;
