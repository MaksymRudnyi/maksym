// app/providers.tsx
"use client";

import { useRouter } from "next/navigation";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";

// app/providers.tsx

// app/providers.tsx

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ClerkProvider>{children}</ClerkProvider>
    </NextUIProvider>
  );
}
