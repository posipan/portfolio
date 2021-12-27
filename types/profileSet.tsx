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
} from "react-icons/si";

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
  { title: "WordPress", color: "#21759B", icon: <SiWordpress /> },
  { title: "Git", color: "#F1502F", icon: <SiGit /> },
];

type TimelineItemType = {
  title: string;
  period: string;
  occupation: string;
};
export const TimelineItem: Array<TimelineItemType> = [
  {
    title: "都内のWeb制作会社でフロントエンドエンジニアとして勤める",
    period: "2015 - 2018",
    occupation:
      "主にWebサイトやブラウザゲームのコーディング制作を行う。不定期で客先常駐も経験する。",
  },
  {
    title: "都内のWeb制作会社でWebエンジニアとして勤める",
    period: "2018 - 2019",
    occupation:
      "キャリアップのために転職。WordPressやPHP案件、Vue.jsを使った案件に携わる。",
  },
  {
    title: "音楽活動と販売を始める",
    period: "2019 - 2021",
    occupation:
      "思い描いていたエンジニア像とかけ離れてしまい、Web制作会社を退職する。1度きりの人生と意気込み、音楽活動を始める。国際的なバンドを組むも1曲制作して自然消滅。その後は個人でYouTubeやBeatStars.comで活動する。",
  },
  {
    title: "フリーランスでフロントエンドエンジニアを始める",
    period: "2021.08 - 現在",
    occupation:
      "YouTube APIを使って自分用にマーケティングツールの制作を試みたことがきっかけでプログラミングを再開。現在は学習に比重を置きつつ、クラウドソーシングでフロントエンドエンジニアを始める。",
  },
];
