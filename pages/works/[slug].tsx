import styled from "styled-components";
import Layout from "../../components/templates/Layout";
import Date from "../../components/atoms/Date";
import { getAllWorkSlugs, getWorkData } from "../../lib/works";
import { GetStaticPaths, GetStaticProps } from "next";
import { Text, Heading, Icon, Flex } from "@chakra-ui/react";
import { IoOpenOutline, IoCalendarClearOutline } from "react-icons/io5";

import { fontFamily } from "../../styles/style";
const { en } = fontFamily;

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
    <>
      <Layout
        workDataFlag
        workDataImage={workData.image}
        siteTitleChild={`${workData.title} | Works`}
      >
        <article>
          <Text as="h1" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" mb={{ base: 4, md: 6 }} pb={{ base: 4, md: 6 }}>
            {workData.title}
            <Text fontSize="sm" mt={3} display="flex" alignItems="center">
              <Icon as={IoCalendarClearOutline} fontSize="lg" mr={1} />
              <Date dateString={workData.date} />
            </Text>
          </Text>
          <SContent
            dangerouslySetInnerHTML={{ __html: workData.contentHtml }}
          />
          <Flex
            href={workData.url}
            as="a"
            alignItems="center"
            justifyContent="center"
            fontSize="md"
            fontFamily={en}
            fontWeight="bold"
            target="_blank"
            rel="noreferrer noopener"
            background="brand.primary"
            w="150px"
            p="8px"
            borderRadius="5px"
            color="#fff"
            _hover={{ opacity: 0.7 }}
          >
            Visit Website
            <Icon as={IoOpenOutline} fontSize="md" ml={1} />
          </Flex>
        </article>
      </Layout>
    </>
  );
}

const SContent = styled.div`
  h2 {
    margin: 3rem 0 1rem;
    font-family: ${en};
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1;
    @media (max-width: 768px) {
      font-size: 1.875rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
  }
  ul {
    padding-left: 1.375rem;
    li {
      list-style: disc;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }
`;

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
