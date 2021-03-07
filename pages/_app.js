import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en_messages from "../translations/en.json";
import fr_messages from "../translations/fr.json";
import "../styles/globals.css";

const messages = {
  en: en_messages,
  fr: fr_messages,
};

function ScandinaveSpa({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default ScandinaveSpa;
