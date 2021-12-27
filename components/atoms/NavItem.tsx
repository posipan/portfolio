import Link from "next/link";

export const NavItem = ({ name, href }: {
  name: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
  );
};
