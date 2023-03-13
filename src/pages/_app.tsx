import "@/styles/globals.scss";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import { register } from "swiper/element/bundle";

register();

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
