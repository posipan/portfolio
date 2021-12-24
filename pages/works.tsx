import type { NextPage } from "next";
import Link from "next/link";
import { getSortedWorkData } from "../lib/works";
import { GetStaticProps } from "next";
import Date from "../components/Date";
import Layout from "../components/Layout";
import Image from "next/image";

const WorksPage: NextPage = ({
  allWorkData,
}: {
  allWorkData: {
    title: string;
    date: string;
    slug: string;
    image: string;
  }[];
}) => {
  return (
    <Layout siteTitleChild="制作実績" siteDescription="制作実績">
      <h1>制作実績</h1>
      <ul>
        {allWorkData.map(({ title, date, slug, image }) => (
          <li key={slug}>
            <Image src={`/images/works/${image}`} alt={title} width={1280 / 2} height={720 / 2} />
            <br />
            <Link href={`/works/${slug}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default WorksPage;

export const getStaticProps: GetStaticProps = async () => {
  const allWorkData = getSortedWorkData();
  return {
    props: {
      allWorkData,
    },
  };
};
