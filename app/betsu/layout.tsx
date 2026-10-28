export default function Kyotu({ children }: LayoutProps<"/betsu">) {
  return (
    <>
      <header>これ別なレイアウトの共通のヘッダー</header>
      <main>{children}</main>
      <footer>これ別なレイアウトの共通のフッター</footer>
    </>
  );
}