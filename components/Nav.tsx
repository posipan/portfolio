import Link from "next/link";
import styled from "styled-components";
import { fontFamily, color } from "../styles/style";
import { useRouter } from "next/router";
import { Box, HStack } from "@chakra-ui/react";

const { en } = fontFamily;
const { primary } = color;

const navList = [
  { title: "Profile", path: "/" },
  { title: "Works", path: "/works" },
];

export const Nav = () => {
  const router = useRouter();

  return (
    <Box as="nav" mb={10}>
      <HStack
        as="ul"
        spacing="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {navList.map((item, index) => {
          return (
            <Box as="li" key={index}>
              <Link href={item.path}>
                <SAnchor
                  className={router.pathname === item.path ? "active" : ""}
                >
                  {item.title}
                </SAnchor>
              </Link>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

const SAnchor = styled.a`
  position: relative;
  font-size: 1.25rem;
  font-family: ${en};
  font-weight: 500;
  padding-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    &:before {
      width: 100%;
    }
  }
  &.active {
    &:before {
      width: 100%;
    }
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0px;
    height: 2px;
    background: ${primary};
    transition: 0.3s ease width;
  }
`;
