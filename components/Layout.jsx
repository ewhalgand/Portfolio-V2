import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import Translate from './Translate';

const Layout = ({ children }) => {
    return (
    <>
        <Head>
            <title>Saï - Développeur Frontend</title>
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