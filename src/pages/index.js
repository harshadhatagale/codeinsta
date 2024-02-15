
import LatestPostListView from "@/pages/LatestPostListView";
import Header from "@/components/header1";
export default function Home() {
  return (
    <main >
      <Header content="Latest Posts"/>
      <LatestPostListView />
    </main>
  );
}
