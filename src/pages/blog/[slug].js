import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { getPostByslug, getPostSlugs } from '../../../utils/fetchPosts';
import ReactMarkdown from "react-markdown"
import styles from "../../styles/post_detail_view.module.css"
import Header2 from '@/components/header2';
import { Merriweather } from 'next/font/google';
const merry= Merriweather({
  subsets:["latin"],
  weight:["300","400","700","900"]
})
export default function DetailPostView({ post }) {
  const router = useRouter();
  if (router.isFallback) {

    return
    <div>Loading</div>
  }
  return (
    <>
      <div className={styles.content}>
        <Header2 content= {post.slug.replace(".md","")} />
        <ReactMarkdown className={`${merry.className} text-md md:text-lg lg:text-xl`}>
          {post.content}
        </ReactMarkdown>
      </div>
    </>
  )
}
export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => (
    {
      params: { slug },
    }
  ));
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const post = getPostByslug(params.slug);
  return {
    props: {
      post,
    }
  }
}