import styled from "styled-components";
import { Box, Heading } from "@chakra-ui/react";

export const ProfileLayout = ({ title, children }: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <SSection>
      <Heading as="h2" fontSize="3xl" mb={6}>{title}</Heading>
      {children}
    </SSection>
  );
};

const SSection = styled.section`
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
