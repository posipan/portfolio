import type { NextPage } from "next";
import Layout from "../components/templates/Layout";
import { Profile } from "../components/organisms/profile/Profile";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Profile />
    </Layout>
  );
};

export default Home;
