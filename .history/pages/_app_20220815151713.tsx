import { Navigation } from '../components/Navigation';
import '../styles/globals.css';
import { withPrepass } from '../src/withPrepass';
import { hydrateFetchStore } from '../src/myFetch';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, fetchStore }) {

  hydrateFetchStore(fetchStore)

  return <>
  
    <Navigation defaultTheme="light" attribute="class">
    <Component {...pageProps} />
  
  </>
}

export default withPrepass()(MyApp)