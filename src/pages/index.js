import Image from "next/image";
import { Black_And_White_Picture, Inter } from "next/font/google";
import { Main } from "next/document";
import LatestPostListView from "@/pages/LatestPostListView";
import Header from "@/components/header1";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <Header content="Latest Posts"/>
      <LatestPostListView />
    </main>
  );
}
