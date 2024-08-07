"use client";

import React from "react";

import Image from "next/image";

import { login } from "@/actions/auth";
import GitHubIcon from "@/public/svg/social/github.svg";
import GoogleIcon from "@/public/svg/social/google.svg";
import { Button } from "@nextui-org/react";

export const SignInForm = () => {
  return (
    <div className={"flex justify-between gap-4"}>
      <form action={() => login("google")} className={"w-full"}>
        <Button type="submit" variant="bordered" className={"w-full"}>
          <Image src={GoogleIcon} alt="Google" width={30} height={30} />
          Google
        </Button>
      </form>

      <form action={() => login("github")} className={"w-full"}>
        <Button type="submit" variant="bordered" className={"w-full"}>
          <Image src={GitHubIcon} alt="GitHub" width={30} height={30} />
          GitHub
        </Button>
      </form>
    </div>
  );
};
