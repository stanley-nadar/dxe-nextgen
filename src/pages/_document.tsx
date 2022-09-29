import Document, {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

const MyDocument = ({ __NEXT_DATA__: { locale } }: DocumentProps) => (
  <Html lang={locale}>
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        key="preconnect-google-fonts"
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link key="preconnect-fonts-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link key="preconnect-www-gstatic" rel="preconnect" href="https://wwww.gstatic.com" crossOrigin="anonymous" />
      <link
        key="google-fonts"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

// see @https://stackoverflow.com/a/71789784
MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          {sheet.getStyleElement()}
        </Fragment>,
      ],
    };
  } finally {
    sheet.seal();
  }
};
export default MyDocument;
