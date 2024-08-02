import { FC, ReactNode } from "react";

import { Navigation } from "@/components";
import { UserProfile } from "@/types/UserProfile";
import { getSession } from "@auth0/nextjs-auth0";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = async ({ children }) => {
  const session = await getSession();

  return (
    <>
      <Navigation user={session?.user as UserProfile} />
      {children}
    </>
  );
};

export default Layout;
