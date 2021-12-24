import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
export const siteTitle = "POSIPAN（ポジパン）";

export default function Layout({
  children,
  siteTitleChild,
  siteDescription,
  home,
}: {
  children: React.ReactNode;
  siteTitleChild?: string;
  siteDescription: string;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        {home ? (
          <title>{siteTitle}</title>
        ) : (
          <title>
            {siteTitleChild} | {siteTitle}
          </title>
        )}
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!home && (
        <Breadcrumbs useDefaultStyle rootLabel="Home" />
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
}
