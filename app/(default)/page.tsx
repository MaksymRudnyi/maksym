import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";

export const metadata = {
  title: "App Router",
};

export default async function Page() {
  const session = await auth();

  return (
    <div className={"container mx-auto min-h-screen px-4 sm:px-6"}>
      <h1 className="text-3xl font-bold">Офіційний сайт Рудного Максима</h1>
      <Link href="/courses">Глянути курси</Link>
    </div>
  );
}
