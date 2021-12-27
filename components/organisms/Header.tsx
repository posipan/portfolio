import { Flex } from "@chakra-ui/react";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex as="header" alignItems="center" justifyContent="center" minH={{ base: "auto", md: "300px" }}>
      <Flex alignItems="center" justifyContent="center" as="div" w="100%" maxW={{ base: "none", md: "750px" }} mx="auto">{children}</Flex>
    </Flex>
  );
};
