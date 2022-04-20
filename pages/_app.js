import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Layout from "../layout/Layout";

import { pageview } from "../@supplier-app/lib/gtm";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  // const router = useRouter()
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', pageview)
  //   return () => {
  //     router.events.off('routeChangeComplete', pageview)
  //   }
  // }, [router.events])

  
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
