import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Date from '../../components/Date';
import { getAllWorkIds, getWorkData } from '../../lib/works';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Text, Icon, Box } from '@chakra-ui/react';
import { IoOpenOutline, IoCalendarClearOutline } from 'react-icons/io5';

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
            pb={{ base: 4, md: 6 }}
          >
            {workData.title}
            <Text fontSize="sm" mt={3} display="flex" alignItems="center">
              <Icon as={IoCalendarClearOutline} fontSize="lg" mr={1} />
              <Date dateString={workData.date} />
            </Text>
          </Text>
          <SContent
            dangerouslySetInnerHTML={{ __html: workData.contentHtml }}
          />
          <Box
            href={workData.url}
            as="a"
            display="inline-block"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontWeight="bold"
            target="_blank"
            rel="noreferrer noopener"
            background="brand.primary"
            w="auto"
            p="8px 16px"
            borderRadius="5px"
            color="#fff"
            _hover={{ opacity: 0.7 }}
          >
            {workData.title}
            <Icon as={IoOpenOutline} fontSize="md" ml={1} />
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
    line-height: 1;
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
