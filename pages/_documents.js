import Document, { Html, Main, Head, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocument;
