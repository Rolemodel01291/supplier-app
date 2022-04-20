import Head from "next/head";

import Header from "../components/Header/Header";
import Lists from "../components/Lists/Lists";

export default function Home() {
  return (
    <div>
      <Head>
        <title>supplier-app</title>
        {/* Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {/* End Icons */}
        <meta
          name="description"
          content="A new kind of connection and collaboration platform"
        />

        <meta property="og:title" content="supplier-app" />
        <meta
          property="og:description"
          content="A new kind of connection and collaboration platform"
        />
        <meta property="og:image" content="/og-image.jpg" />

        <meta property="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        {/* Header */}
        <Header />
        {/* End Header */}

        {/* Content */}
        <Lists />
        {/* End Content */}
      </main>
    </div>
  );
}
