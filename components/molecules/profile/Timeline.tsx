import styled from "styled-components";
import { Text, Heading } from "@chakra-ui/react";

export const Timeline = ({
  title,
  period,
  occupation,
}: {
  title: string;
  period: string;
  occupation: string;
}) => {
  return (
    <SItem>
      <Text fontSize="sm" fontWeight="700" mb={1}>
        {period}
      </Text>
      <Heading as="h3" fontSize="xl" mb={3}>
        {title}
      </Heading>
      <Text w={{ base: "100%", md: "90%" }} fontSize="md" lineHeight="2">
        {occupation}
      </Text>
    </SItem>
  );
};

const SItem = styled.li`
  position: relative;
  margin-left: 0;
  padding: 0 0 2rem 2rem;
  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
  &:last-child {
    padding-bottom: 0;
    &:before {
      display: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 2px;
    height: 100%;
    background: #484848;
  }
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: -6px;
    width: 14px;
    height: 14px;
    border-radius: 9999px;
    background: #484848;
  }
`;
