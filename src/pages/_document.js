import { Html, Head, Main, NextScript, } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <title>Code Insta</title>
      <Head />
      <body className="dark:bg-black white dark:text-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
