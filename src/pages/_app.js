import "@/styles/globals.css";
import Layout from "@/components/Layout";
import ReactGa from "react-ga"
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const router= useRouter();
  useEffect(()=>{
    ReactGa.initialize("G-J8N20BZMEN");
    ReactGa.pageview(window.location.pathname+window.location.search);
    const handleRouteChange=(url)=>{
      ReactGa.pageview(url)
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return()=>{
      router.events.off("routeChangeComplete", handleRouteChange)
    };
  }, [])
  return (
    <Layout>
      <main>
      <Component {...pageProps} />
      </main>
    </Layout>
  );
}
