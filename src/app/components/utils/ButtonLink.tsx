import Link from "next/link";
import React, { PropsWithChildren } from "react";

const ButtonLink = ({ children }: PropsWithChildren) => {
  return (
    <Link
      href="https://wa.me/5511971408114"
      target="_blank"
      rel="noreferrer"
      prefetch={false}
      className="
        font-poppins
        font-bold
        relative
        inline-block
        py-2 px-6
        rounded-md
        bg-gradient-to-r from-sky-600 to-sky-700
        text-gray-50
        overflow-hidden
        border border-transparent
        transition
        duration-500
        ease-in-out
        hover:border-sky-400
        before:absolute
        before:top-0
        before:left-[-100%]
        before:w-full
        before:h-full
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/30
        before:to-transparent
        before:transform
        before:skew-x-12
        before:transition-transform
        before:duration-700
        hover:before:translate-x-[300%]
        hover:scale-110
      "
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
