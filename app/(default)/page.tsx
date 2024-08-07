import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";

export const metadata = {
  title: "App Router",
};

export default async function Page() {
  const session = await auth();

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Офіційний сайт Рудного Максима
      </h1>
      <Link href="/courses">Глянути курси</Link>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
}
