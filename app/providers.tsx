"use client";

import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useCountdown } from "@/hooks/useCountdown";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useCountdown();

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </SessionProvider>
  );
}
