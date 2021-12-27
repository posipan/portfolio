import Image from "next/image";
import { FollowMe } from "./FollowMe";
import { Flex, Box, Text } from "@chakra-ui/react";

export const HeaderIcon = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      w="100%"
      px={5}
      py={{ base: 10, md: 10 }}
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="60px"
        w="120px"
        h="120px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="brand.secondary"
      >
        <Image src="/images/posipan.png" alt="POSIPAN" width={94} height={94} />
      </Box>
      <Text fontSize="sm" mt={3} mb={6} textAlign="center">
        オスの2年ぶりフロントエンドエンジニアです🐼
      </Text>
      <FollowMe />
    </Flex>
  );
};
