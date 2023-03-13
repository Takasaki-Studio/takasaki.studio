import "@/styles/globals.scss";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { register } from "swiper/element/bundle";

register();

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
