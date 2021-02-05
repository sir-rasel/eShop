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
            <meta charset="UTF-8" />
            <meta name="keywords" content="React, Next, Eshop, Ecommerce" />
            <meta name="description" content="Online Shop" />
            <meta name="author" content="Saiful Islam Rasel" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> eShop </title>
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