"use client";

import { useRouter } from "next/navigation";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <UserProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </UserProvider>
  );
}
