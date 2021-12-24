import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>プロフィール</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>実績一覧</a>
          </Link>
        </li>
        <li>
          <a href="https://posipan.com" target="_blank">
            ブログ
          </a>
        </li>
      </ul>
    </nav>
  );
};
