import Layout from '../components/Layout';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import '../styles/globals.css'

i18next.use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: "/translations/{{ lng }}/translations.json"
    },
    lng: "fr",
    fallbackLng: "fr"
  })

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp