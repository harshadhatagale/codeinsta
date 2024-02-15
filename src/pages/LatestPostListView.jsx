import { useState } from 'react'
import Post from '../components/Blog/Post'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '800', '700', '900']
});

export default function LatestPostListView() {
  return (
    <div className={`${poppins.className} pt-5 items-center justify-items-center grid-cols-2 grid content-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3`}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
