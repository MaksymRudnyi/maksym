import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
