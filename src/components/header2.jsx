import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export default function Header2(props) {
    return (
        <div className='w-full bg-slate-500 rounded-lg py-2 px-1 md:py-4 md:px-2 mb-5'>
            <p className={` ${poppins.className} capitalize dark:text-white md:my-5 text-black font-bold text-lg md:text-xl lg:text-2xl`}>{props.content}</p>
        </div>
    )
}