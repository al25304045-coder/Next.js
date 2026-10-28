export default async function Tekitou() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>別なレイアウトで出すページ</div>
  );
}