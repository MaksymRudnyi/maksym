import { Navigation } from "@/components";
import { getSession } from "@auth0/nextjs-auth0";

const Layout = async ({ children }) => {
  const session = await getSession();

  return (
    <>
      <Navigation user={session?.user} />
      {children}
    </>
  );
};

export default Layout;
