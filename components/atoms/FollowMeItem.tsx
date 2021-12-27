import { Box, Text } from "@chakra-ui/react";

export const FollowMeItem = ({ href, children }: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Text
      as="a"
      fontSize="2xl"
      color="brand.secondary"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      _hover={{ opacity: 0.7 }}
    >
      {children}
    </Text>
  );
};
