import styled from "styled-components";
import { useTranslation } from "react-i18next";

const NotFound = () => {

    const { t } = useTranslation("fr", { useSuspense: false });

    return ( 
        <Section>
            <img src="/cog.png" alt="icone 404" />
            <h1>{t("notfound.error")}</h1>
        </Section>
     );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 250px;
        margin: 20px 0;

        @media screen and (max-width: 450px) {
            width: 60%;
        }
    }

    h1 {
        color: #fff;
        text-align: center;
    }
`
 
export default NotFound;