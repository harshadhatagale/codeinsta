import "@/styles/globals.css";
import Layout from "@/components/Layout";
import ReactGa from "react-ga"
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  ReactGa.initialize("G-13LE94MTNH")
  return (
    <Layout>
      <main>
      <Component {...pageProps} />
      </main>
    </Layout>
  );
}
