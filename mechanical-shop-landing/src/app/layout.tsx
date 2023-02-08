'use client';
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Navbar></Navbar>
          <div>{children}</div>
         </ChakraProvider>
      </body>
     
    </html>
  )
}
