type PageProps = {
  params: Promise<{ nanka: string, hokano: string }>;
};

export default async function Tekitou({ params }: PageProps) {
  const { nanka, hokano } = await params;
  return (
    <h2>よみこんだパラメーター: {nanka}, {hokano}</h2>
  );
}
