"use client";

import React, { useEffect, useState } from "react";

import { ModalSignIn } from "@/components";
import { Button, Container } from "@nextui-org/react";
import clsx from "clsx";

import { debounce } from "@/app/utils/debounce";

export const FixedContainer = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;

      console.log("scrollTop", scrollTop);
      if (scrollTop > 200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }, 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerClasses = clsx(
    "fixed bottom-0 w-full px-6 backdrop-saturate-150 bg-background/70 backdrop-blur-lg flex items-center justify-center shadow-md transition-transform duration-300 z-30 h-16",
    showNavbar ? "translate-y-0" : "translate-y-full",
  );

  return (
    <div className={containerClasses}>
      <ModalSignIn cta={"Отримати зі знижкою 75%"} />
    </div>
  );
};
