import type { NextPage } from "next";
import Layout from "../components/Layout";

const Profile: NextPage = () => {
  return (
    <Layout siteTitleChild="プロフィール" siteDescription="プロフィール">
      <h1>プロフィール</h1>
      <section>
        <figure>写真</figure>
        <p>1992.01 -</p>
      </section>

      <section>
        <h2>経歴</h2>
        <ul>
          <li>
            <div>株式会社カンナート</div>
            <div>2015.11 - 2018.01</div>
            <div>フロントエンドエンジニア</div>
          </li>
          <li>
            <div>株式会社add more</div>
            <div>2018.03 - 2019.09</div>
            <div>Webエンジニア</div>
          </li>
          <li>
            <div>音楽活動と販売を始める</div>
            <div>2019.10 - 2021.07</div>
            <div></div>
          </li>
          <li>
            <div>フリーランスでフロントエンドエンジニアを始める</div>
            <div>2021.08 - 現在</div>
            <div>フロントエンドエンジニア</div>
          </li>
        </ul>
      </section>
      <section>
        <h2>スキル</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js、Next.js</li>
          <li>Node</li>
          <li>WordPress</li>
          <li>Git</li>
        </ul>
      </section>
      <section>
        <h2>目標</h2>
        <ul>
          <li>スマホアプリの制作</li>
          <li>ブログの収益化</li>
          <li>YouTubeの収益化</li>
        </ul>
      </section>
    </Layout>
  );
};
export default Profile;
