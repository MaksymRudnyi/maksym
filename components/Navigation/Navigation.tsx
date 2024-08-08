"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { AvatarMenu, SignInButtonWithModal } from "@/components";
import { UserProfile } from "@/types/UserProfile";
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

const menuItems = [
  {
    label: "Курси",
    href: "/courses",
  },
  {
    label: "Послуги",
    href: "/services",
  },
  {
    label: "Блог",
    href: "/blog",
  },
  {
    label: "Контакти",
    href: "/contacts",
  },
];

export const Navigation = ({ user }: { user: UserProfile }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname?.indexOf(href) === 0;
  };

  const isHidden = pathname?.indexOf("/courses/code-quality/") === 0;

  if (isHidden) {
    return null;
  }

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
          <Link href="/services">Послуги</Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/blog")}>
          <Link color="foreground" href="/blog">
            Блог
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/contacts")}>
          <Link color="foreground" href="/contacts">
            Контакти
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user?.email ? <AvatarMenu user={user} /> : <SignInButtonWithModal />}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem isActive={isActive(item.href)} key={item.href}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
