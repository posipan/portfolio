import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Date from '../../components/Date';
import { getAllWorkIds, getWorkData } from '../../lib/works';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Text, Icon, Box, Flex } from '@chakra-ui/react';
import {
  IoOpenOutline,
  IoCalendarClearOutline,
} from 'react-icons/io5';
import Link from 'next/link';

export default function Work({
  workData,
}: {
  workData: {
    title: string;
    date: string;
    url: string;
    image: string;
    contentHtml: string;
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
          <Text
            as="h1"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="700"
            mb={{ base: 4, md: 6 }}
          >
            {workData.title}
            <Text fontSize="sm" mt={3} display="flex" alignItems="center">
              <Icon as={IoCalendarClearOutline} fontSize="lg" mr={1} />
              <Date dateString={workData.date} />
            </Text>
          </Text>
          <Box display="inline-block">
            <Flex
              href={workData.url}
              as="a"
              alignItems="center"
              fontSize="sm"
              fontWeight="bold"
              target="_blank"
              w="auto"
              rel="noreferrer noopener"
              textDecoration="underline"
              _hover={{ opacity: 0.7 }}
            >
              {workData.url}
              <Icon as={IoOpenOutline} fontSize="md" ml={1} />
            </Flex>
          </Box>
          <SContent
            dangerouslySetInnerHTML={{ __html: workData.contentHtml }}
          />
          <Box m="4rem auto 0">
            <Link href="/works">
              <Text
                as="a"
                p="1rem"
                w="100%"
                m="0 auto"
                cursor="pointer"
                maxWidth="280px"
                borderRadius="5px"
                color="#fff"
                textAlign="center"
                fontWeight="bold"
                fontSize="md"
                background="brand.primary"
                _hover={{ opacity: 0.7 }}
              >
                制作物一覧に戻る
              </Text>
            </Link>
          </Box>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = await getWorkData(params.id as string);
  return {
    props: {
      workData,
    },
  };
};

const SContent = styled.div`
  h2 {
    margin: 3rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 1.5rem 0 1rem;
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
