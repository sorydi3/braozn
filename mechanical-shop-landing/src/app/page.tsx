'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Flex className="container " bg={"red.100"}>
        <main>
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
      </Flex>
  )
}
