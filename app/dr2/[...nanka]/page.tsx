type PageProps = {
  params: Promise<{ nanka: string[] }>;
};

export default async function Tekitou({ params }: PageProps) {
  const { nanka } = await params;
  return (
    <h2>よみこんだパラメーター: {nanka.join(",")}</h2>
  );
}
