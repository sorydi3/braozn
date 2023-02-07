'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Flex ,ChakraProvider} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
    return (
        <ChakraProvider
        >
            <Flex className="container" bg={"red.100"} w="full">

                
            
            </Flex>
        </ChakraProvider>
    )
}