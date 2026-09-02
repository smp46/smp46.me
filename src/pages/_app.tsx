import type { AppProps } from 'next/app'; // Import AppProps type
import Layout from '../components/layout';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import '../prism-theme.css';
import '../../globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptUrl =
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ||
    'https://cloud.umami.is/script.js';
  const domains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  return (
    <Layout>
      {websiteId && (
        <Script
          strategy="afterInteractive"
          src={scriptUrl}
          data-website-id={websiteId}
          {...(domains ? { 'data-domains': domains } : {})}
        />
      )}
      <Component {...pageProps} />
    </Layout>
  );
}
