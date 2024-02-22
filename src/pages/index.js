
import Header from "@/components/header1";
import LatestPost from "./latestPosts";
import PopularPost from "@/pages/popularPosts";
import { Head } from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Explore comprehensive coding tutorials on our blog, where we demystify programming concepts, provide hands-on examples, and guide you through real-world projects. From beginner-friendly introductions to advanced coding challenges, our tutorials cover a wide range of programming languages and technologies. Elevate your coding skills with our expert insights and practical guidance. Start your coding journey today!" />
      </Head>
      <Header content="Latest Posts" />
    </>
  );
}
