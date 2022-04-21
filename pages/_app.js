// import { useEffect } from "react";
// import Script from "next/script";
// import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Layout from "../layout/Layout";
import { store } from "../app/store";

// import { pageview } from "../@supplier-app/lib/gtm";


import "tailwindcss/tailwind.css";
import "../styles/globals.css";


let persistor = persistStore(store);

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
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </PersistGate>
      </Provider> */}
    </>

  );
}

export default MyApp;
