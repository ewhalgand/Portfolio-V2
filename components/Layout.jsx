import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import Translate from './Translate';

const Layout = ({ children }) => {
    return (
    <>
        <Head>
            <meta charset="utf-8" />
            <title>Saï - Développeur Frontend</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Saï" />
            <meta property="site_name" content="Saï" />
            <meta property="title" content="Saï - Développeur Frontend" />
            <meta property="image" content="/portfolio/sai.png" />
            <meta name="description" content="Mon portfolio, regroupe tous mes projets" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Saï" />
            <meta property="og:url" content="https://ewha.fr/" />
            <meta property="og:title" content="Mon Portfolio" />
            <meta property="og:description" content="Mon Portfolio - Regroupe tous mes projets" />
            <meta property="og:image" content="/portfolio/sai.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://ewha.fr" />
            <meta property="twitter:title" content="Mon Portfolio" />
            <meta property="twitter:description" content="Mon Portfolio - Regroupe tous mes projets" />
            <meta property="twitter:image" content="/portfolio/sai.png" />
            <meta name="keywords" content="ewen, saï, saipatate, web, developer, développeur, frontend, fantashop" />
        </Head>

        <Navbar />

        <Container>
            {children}
            <Translate />
        </Container>

        <Footer />
    </>
    );
}

const Container = styled.main`
    margin: 0 auto;
    padding: 40px 20px;
    position: relative;
`
 
export default Layout;