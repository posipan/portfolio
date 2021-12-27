import Head from "next/head";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { HeaderIcon } from "../molecules/HeaderIcon";
import { Nav } from "../organisms/Nav";
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
      <Header>
        {workDataFlag ? (
          <Box as="div" px={5} py={{ base: 0, md: 10 }}>
            <Image
              src={`/images/works/${workDataImage}`}
              alt=""
              width={1280}
              height={720}
              className="thumbnail"
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
