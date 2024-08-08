import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import Google from "@auth/core/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

// import { SupabaseAdapter } from "@auth/supabase-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  // adapter: SupabaseAdapter({
  //   url: process.env.SUPABASE_URL,
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  // }),
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.split(String.raw`\n`).join(
        "\n",
      ),
    }),
  }),
});
