import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout home siteDescription="フロントエンドエンジニアのPOSIPAN（ポジパン）のWebサイトです。">
      <h1>Home</h1>
      <p>フロントエンドエンジニアのPOSIPAN（ポジパン）です✋</p>
    </Layout>
  );
};

export default Home;
