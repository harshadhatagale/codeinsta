import React from 'react'
import blog_thumb from "../../../public/blog_thumb.jpg"
import Image from 'next/image'
import Link from 'next/link'
import code from "../../../public/code.jpg"
export default function Post(props) {
  return (
    <>
      <div className="flex bg-gray-100 shadow-sm  flex-col p-2 gap-3  dark:bg-black border border-gray-500 rounded-lg min-w-220 md:w-auto">
        <Image src={code} alt="Post Thumbnail" width={220} height={220} className='rounded-lg' />
        <div className="flex flex-col gap-2">
          <p className='text-right text-gray-400 text-sm'>18 feb 2024</p>
          <p className='text-lg font-bold'>{props.title}</p>
          <p className='text-gray-400 text-sm'>{props.content}</p>
          <div className="flex items-center justify-center p-x-5 p-y-10">
            <Link href="/" className='text-white rounded-md w-full bg-green-700 text-center'>Read This!</Link>
          </div>
        </div>
      </div>
    </>
  )
}
