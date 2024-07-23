import "@/styles/globals.css";
// import '@arcgis/core/assets/esri/themes/light/main.css'; // ArcGISのスタイルを追加
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
