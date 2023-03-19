import "@/styles/globals.scss";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Takasaki Studio</title>
        <meta name="title" content="Takasaki Studio" />
        <meta
          name="description"
          content="Construímos soluções para tornar possível o seu sonho, garantindo sempre a qualidade e um desenvolvimento personalizado para as suas necessidades"
        />
        <meta
          name="keywords"
          content="desenvolvimento, takasaki, studio, web, programação"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta property="og:title" content="Takasaki Studio" />
        <meta property="og:url" content="https://takasaki.studio" />
        <meta
          property="og:description"
          content="Construímos soluções para tornar possível o seu sonho, garantindo sempre a qualidade e um desenvolvimento personalizado para as suas necessidades"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="theme-color" content="#745CFF" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
