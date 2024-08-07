"use server";

import { signIn } from "@/auth";

type Provider = "google" | "github" | "facebook" | "twitter";

export const login = async (provider: Provider) => {
  await signIn(provider);
};
