import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="keywords" content="React, Next, Eshop, Ecommerce" />
            <meta name="description" content="Online Shop" />
            <meta name="author" content="Saiful Islam Rasel" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument