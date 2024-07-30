import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const Card: FC<CardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className={"relative bg-sky-200 p-5 pt-16"}>
      <div
        className={
          "absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 transform items-center justify-center rounded-full bg-amber-200 text-5xl"
        }
      >
        {Icon && <Icon />}
      </div>
      <div className={"mb-2 text-2xl font-semibold"}>{title}</div>
      <div>{description}</div>
    </div>
  );
};
