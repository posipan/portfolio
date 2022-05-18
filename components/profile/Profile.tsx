import styled from "styled-components";
import { Timeline } from "../profile/Timeline";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Section } from "./Section";
import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiWordpress,
  SiGit,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

type TimelineItemType = {
  title: string;
  period: string;
  occupation: string;
};
export const TimelineItem: Array<TimelineItemType> = [
  {
    title: "都内のWeb制作会社でフロントエンドエンジニアとして勤める",
    period: "2015.11 - 2018.01",
    occupation:
      "主にWebサイトやブラウザゲームのコーディングを担当。不定期で客先常駐も経験する。",
  },
  {
    title: "都内のWeb制作/開発会社でフロントエンジニアとして勤める",
    period: "2018.03 - 2019.09",
    occupation:
      "Web開発も行いたいと思い、キャリアップのために転職。WordPressやPHP案件、Vue.jsを使った案件に携わる。",
  },
  {
    title: "音楽活動と販売を始める",
    period: "2019.10 - 2021.11",
    occupation:
      "上記の会社では開発の仕事に携わることがあまりなかったため退職。1度きりの人生と意気込み、音楽活動を始める。国際的なバンドを組むも1曲制作して自然消滅。その後は個人でYouTubeやBeatStars.comで活動する。",
  },
  {
    title: "クラウドソーシングでフロントエンドエンジニアをしながら、開発の勉強を始める",
    period: "2021.12 - 現在",
    occupation:
      "YouTube APIを使って自分用にマーケティングツールの制作を試みたことがきっかけでプログラミングを再開。現在は学習に比重を置きつつ、クラウドソーシングでフロントエンドエンジニアとしてゆるく活動、評価はMAXを継続中。",
  },
];

type SkillListType = {
  title: string;
  color: string;
  icon: React.ReactNode;
};
export const SkillList: Array<SkillListType> = [
  { title: "HTML", color: "#E34F26", icon: <SiHtml5 /> },
  { title: "SCSS", color: "#CC6699", icon: <SiSass /> },
  { title: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
  { title: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
  { title: "React", color: "#61DAFB", icon: <SiReact /> },
  { title: "Next.js", color: "#000", icon: <SiNextdotjs /> },
  { title: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
  { title: "PHP", color: "#474A8A", icon: <SiPhp /> },
  { title: "Laravel", color: "#F05340", icon: <SiLaravel /> },
  { title: "WordPress", color: "#21759B", icon: <SiWordpress /> },
  { title: "Git", color: "#F1502F", icon: <SiGit /> },
];

export const Profile = () => {
  return (
    <>
      <Section title="経歴">
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
      </Section>
      <Section title="スキル">
        <Flex as="ul" wrap="wrap">
          {SkillList.map((item, index) => {
            return (
              <Box
                as="li"
                key={index}
                textAlign="center"
                mr={{ base: 2, md: 4 }}
                mb={4}
              >
                <Text color={item.color}>
                  <SIcon>{item.icon}</SIcon>
                </Text>
                <Text fontSize="xs" mt={2}>
                  {item.title}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Section>
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
