import { SiGithub, SiTwitter } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";
import { HStack, Box, Text } from "@chakra-ui/react";

type FollowMeListType = {
  link: string;
  icon: React.ReactNode;
};
const FollowMeList: Array<FollowMeListType> = [
  { link: "https://github.com/posipan", icon: <SiGithub /> },
  { link: "https://twitter.com/POSIPAN999", icon: <SiTwitter /> },
  { link: "https://posipan.com", icon: <MdWebAsset /> },
];

export const FollowMe = () => {
  return (
    <HStack
      spacing="15px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {FollowMeList.map((item, index) => {
        return (
          <Box key={index} as="li">
            <Text
              as="a"
              fontSize="2xl"
              color="brand.secondary"
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              _hover={{ opacity: 0.7 }}
            >
              {item.icon}
            </Text>
          </Box>
        );
      })}
    </HStack>
  );
};
