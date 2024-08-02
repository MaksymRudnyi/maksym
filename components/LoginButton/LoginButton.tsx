import React from "react";

import { Button, Link, NavbarItem } from "@nextui-org/react";

export const LoginButton = () => {
  return (
    <NavbarItem>
      <Button as={Link} color="primary" href="/api/auth/login" variant="flat">
        Вхід
      </Button>
    </NavbarItem>
  );
};
