import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {

  const theme = {
    fonts: {
      heading: 'Inter',
    }
  };

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}


/*
 const theme = {
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
    styles: {
      global: {
        body: {
          bg: 'gray.900',
          color: 'gray.50',
        },
      },
    },  
  };*/
