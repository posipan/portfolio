import type { NextPage } from "next";
import Link from "next/link";
import { getSortedWorkData } from "../lib/works";
import { GetStaticProps } from "next";
import Layout from "../components/templates/Layout";
import Image from "next/image";
import { Text, SimpleGrid, Box } from "@chakra-ui/react";

const WorksPage: NextPage = ({
  allWorkData,
}: {
  allWorkData: {
    title: string;
    slug: string;
    image: string;
  }[];
}) => {
  return (
    <>
      <Layout siteTitleChild="Works">
        <SimpleGrid as="ul" columns={{ base: 1, md: 3 }} spacing={5}>
          {allWorkData.map(({ title, slug, image }) => (
            <Box as="li" key={slug} mb={5}>
              <Link href={`/works/${slug}`}>
                <Box
                  as="a"
                  display="block"
                  cursor="pointer"
                  _hover={{ opacity: 0.7 }}
                >
                  <Image
                    src={`/images/works/${image}`}
                    alt={title}
                    width={1280}
                    height={720}
                    className="thumbnail"
                  />
                  <Text fontSize="sm" mt={1}>
                    {title}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Layout>
    </>
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
