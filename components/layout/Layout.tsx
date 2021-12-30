import Head from "next/head";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { HeaderIcon } from "./header/HeaderIcon";
import { Nav } from "../Nav";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export const siteTitle = "POSIPAN(ポジパン) - フロントエンドエンジニア";
const siteDescription =
  "関東でフリーランスフロントエンドエンジニアをしているPOSIPAN（ポジパン）のポートフォリオサイトです。";
const siteDomain = 'https://panda-life.fun';

export default function Layout({
  children,
  workDataFlag,
  workDataImage,
  siteTitleChild,
  home,
}: {
  children: React.ReactNode;
  workDataFlag?: boolean;
  workDataImage?: string;
  siteTitleChild?: string;
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:url" content={siteDomain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content={siteDomain + `/images/ogp.png`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@POSIPAN999" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={siteDomain + `/images/ogp.png`} />
      </Head>
      <Header>
        {workDataFlag ? (
          <Box as="div" px={{ base: 0, md: 5 }} pt={{ base: 0, md: 10 }} pb={{ base: 5, md: 5 }}>
            <Image
              src={`/images/works/${workDataImage}`}
              alt=""
              width={1280}
              height={720}
              className="thumbnail thumbnailWork"
            />
          </Box>
        ) : (
          <HeaderIcon />
        )}
      </Header>
      <Box as="main" w="100%" maxW="750px" mx="auto" mb={10} p={5}>
        {workDataFlag ? <></> : <Nav />}
        {children}
      </Box>
      <Footer />
    </>
  );
}
