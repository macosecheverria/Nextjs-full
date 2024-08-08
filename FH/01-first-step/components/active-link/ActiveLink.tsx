"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  text: string;
};

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${
        pathName === path && style["active-link"]
      } mr-2`}
      href={path}
    >
      {text}
    </Link>
  );
};
