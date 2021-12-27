import { Box, Heading } from "@chakra-ui/react";
import { fontFamily } from "../../../styles/style";
const { en } = fontFamily;

export const ProfileLayout = ({ title, children }: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box as="section" mb={14}>
      <Heading as="h2" fontFamily={en} fontSize="3xl" mb={4}>{title}</Heading>
      {children}
    </Box>
  );
};
