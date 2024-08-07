import { FC, ReactNode } from "react";

import { auth } from "@/auth";
import { Navigation } from "@/components";
import { UserProfile } from "@/types/UserProfile";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = async ({ children }) => {
  const session = await auth();
  const user = session?.user || {};

  return (
    <>
      <Navigation user={user as UserProfile} />
      {children}
    </>
  );
};

export default Layout;
