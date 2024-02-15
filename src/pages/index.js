
import Header from "@/components/header1";
import LatestPost from "./latestPosts";
import PopularPost from "@/pages/popularPosts";
export async function getStaticProps(){
  const latestPosts= [
    {
      id:1, 
      title: "Post 1",
      content:"This is Post 1",
    },
    {
      id:2, 
      title: "Post 2",
      content:"This is Post 2",
    },
    {
      id:3, 
      title: "Post 3",
      content:"This is Post 3",
    },
    {
      id:4, 
      title: "Post 4",
      content:"This is Post 4",
    }
  ];
  const popularPosts= [
    {
      id:1, 
      title: "Post 1",
      content:"This is Post 1",
    },
    {
      id:2, 
      title: "Post 2",
      content:"This is Post 2",
    },
    {
      id:3, 
      title: "Post 3",
      content:"This is Post 3",
    },
    {
      id:4, 
      title: "Post 4",
      content:"This is Post 4",
    }
  ];
  return{
    props: {
      latestPosts,popularPosts
    },
  }
}
export default function Home({latestPosts, popularPosts}) {
  return (
     <>
      <Header content="Latest Posts"/>
      <LatestPost data={latestPosts} />
      <Header content="Popular Posts"/>
      <PopularPost data={popularPosts}/>
     </>
  );
}
