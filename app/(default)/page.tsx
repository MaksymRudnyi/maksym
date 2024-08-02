import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Офіційний сайт Рудного Максима
      </h1>
      <Link href="/courses">Глянути курси</Link>
    </>
  );
}
