import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '`@/styles/global`';
import { ThemeProvider } from 'styled-components';
import theme from '`@/styles/theme`';
import AuthProvider from '`@/hooks/useAuth`';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '`@/services/queryClient`';

const ToastContainer = dynamic(
  () => import('react-toastify').then(mod => mod.ToastContainer),
  { ssr: false },
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maria Eduarda</title>
        <meta property="og:title" content="Oi, eu sou a Duda" />
        <meta
          property="og:description"
          content="Prazer, meu nome é Maria Eduarda, mas pode me chamar de Duda. Sou uma designer Ux/Ui apaixonada por tecnologia e por criar interfaces que ajudem as pessoas a terem uma experiência incrível."
        />
        <meta property="og:image" content="/ogImage.png" />
        <link
          rel="shortcut icon"
          href="/assets/icons/logo.svg"
          type="image/x-icon"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <main
              style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '100dvh',
              }}
            >
              <Component {...pageProps} />
            </main>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>

      <ToastContainer />
    </>
  );
}

export default MyApp;
