import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { getPostByslug, getPostSlugs } from '../../../utils/fetchPosts';
import ReactMarkdown from "react-markdown"
import styles from"../../components/Blog/post_detail_view.module.css"
import Header from '@/components/header1';
export default function DetailPostView({post}) {
  const router= useRouter();
  if(router.isFallback){
    
    return 
    <div>Loading</div>
  }
  return (
    <>
    <Header content= {post.slug.replace(".md", "")} />
    <ReactMarkdown className={styles.content}>{post.content}</ReactMarkdown>
    </>
  )
}
export async function getStaticPaths(){
  const slugs= getPostSlugs();
  const paths= slugs.map((slug)=>(
    {
      params:{slug},
    }
  ));
  return{
    paths, 
    fallback:false,
  }
}
export async function getStaticProps({params}){
  const post= getPostByslug(params.slug);
  return{
    props:  {
      post,
    }
  }
}
