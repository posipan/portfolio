import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllWorkSlugs, getWorkData } from "../../lib/works";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export default function Work({
  workData,
}: {
  workData: {
    title: string;
    date: string;
    url: string;
    image: string;
  };
}) {
  return (
    <Layout siteTitleChild={`${workData.title} | 実績一覧`} siteDescription={`${workData.title}`}>
      <Image src={`/images/works/${workData.image}`} alt={workData.title} width={1280 / 2} height={720 / 2} />
      <br />
      {workData.title}
      <br />
      <a href={workData.url} target="_blank">{workData.url}</a>
      <br />
      <Date dateString={workData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = await getWorkData(params.slug as string);
  return {
    props: {
      workData,
    },
  };
};
