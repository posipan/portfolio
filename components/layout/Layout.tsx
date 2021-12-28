import Head from "next/head";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { HeaderIcon } from "./header/HeaderIcon";
import { Nav } from "../Nav";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export const siteTitle = "POSIPAN（ポジパン）";
export const siteDescription =
  "関東でフリーランスフロントエンドエンジニアをしているPOSIPAN（ポジパン）のポートフォリオサイトです。";

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
