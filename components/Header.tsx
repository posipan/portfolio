import Link from "next/link";
import { Navigation } from "./Navigation";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image
          src="/images/posipan.png"
          alt="POSIPAN"
          width={140}
          height={140}
        />
        <p>フロントエンドエンジニア</p>
      </div>
      <Navigation />
    </header>
  );
};
