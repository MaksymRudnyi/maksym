"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { AvatarMenu, LoginButton } from "@/components";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const menuItems = ["Курси", "Послуги", "Блог", "Контакти"];

export const Navigation = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname.indexOf(href) === 0;
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"2xl"}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link} href={"/"}>
          <p className="font-bold text-inherit">MAKSYM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={isActive("/courses")}>
          <Link color="foreground" href="/courses">
            Курси
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/services")}>
          <Link href="#" aria-current="page">
            Послуги
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/blog")}>
          <Link color="foreground" href="/blog">
            Блог
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user ? <AvatarMenu user={user} /> : <LoginButton />}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
