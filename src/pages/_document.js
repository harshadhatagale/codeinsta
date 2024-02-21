import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Code Insta</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8N20BZMEN"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-J8N20BZMEN');
      </script>
      <Head />
      <body className="dark:bg-black white dark:text-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
