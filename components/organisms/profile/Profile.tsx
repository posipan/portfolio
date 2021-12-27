import styled from "styled-components";
import { Timeline } from "../../molecules/profile/Timeline";
import { Flex, Box, Text } from "@chakra-ui/react";
import { SkillList, TimelineItem } from "../../../types/ProfileSet";
import { ProfileLayout } from "../../molecules/profile/ProfileLayout";

export const Profile = () => {
  return (
    <>
      <ProfileLayout title="History">
        <Box as="ul">
          {TimelineItem.map((item, index) => {
            return (
              <Timeline
                key={index}
                title={item.title}
                period={item.period}
                occupation={item.occupation}
              />
            );
          })}
        </Box>
      </ProfileLayout>
      <ProfileLayout title="Skill">
        <Flex as="ul" wrap="wrap">
          {SkillList.map((item, index) => {
            return (
              <Box as="li" key={index} textAlign="center" mr={{ base: 2, md: 3 }} mb={4}>
                <Text color={item.color}>
                  <SIcon>{item.icon}</SIcon>
                </Text>
                <Text fontSize="10px" mt={2}>
                  {item.title}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </ProfileLayout>
    </>
  );
};

const SIcon = styled.div`
  svg {
    width: 44px;
    height: 44px;
    margin: 0 auto;
  }
`;
