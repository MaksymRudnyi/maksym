import { FC, ReactNode } from "react";

import { Navigation } from "@/components";
import { UserSession } from "@/types/UserSession";
import { getSession } from "@auth0/nextjs-auth0";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = async ({ children }) => {
  const session: UserSession = await getSession();

  return (
    <>
      <Navigation user={session?.user} />
      {children}
    </>
  );
};

export default Layout;
