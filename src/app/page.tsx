"use client";

import { ColorModeScript } from '@chakra-ui/color-mode'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import App from './app';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        {children}
      </ChakraProvider>
    </>
  )
}
