import Link from "next/link";

export default async function Tekitou() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <div>これでなんかでる</div>
      <Link href="/hoka">hoka no page</Link>
      <br />
      <Link href="/betsu">betsu のページへ</Link>
      <br />
      <Link href="/parts">parts のページへ</Link>
    </>
  );
}
