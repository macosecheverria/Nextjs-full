import Documents,{ Html, Head, Main, NextScript, DocumentContext } from 'next/document'


export default function Document() {
  const getinitialProps =  async(ctx: DocumentContext) => {
    const initialProps = await Documents.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    }

  }

  return (
    <Html lang="en">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
