import React from 'react'
import Nav from './Nav'
export default function Layout({ children }) {
  return (
   <>
   <Nav />
   <main className='pt-28 md:px-24 px-5 dark'>
   {children}
   </main>
   </>
  )
}
