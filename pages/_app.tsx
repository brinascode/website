import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';

import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../theme';
import Layout from '@/components/atoms/Layout';
import Footer from '@/components/atoms/Layout/Footer';
import Header from '@/components/atoms/Layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;