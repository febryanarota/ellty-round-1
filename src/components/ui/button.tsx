import { cn } from "@/utils";
import React from "react";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(`bg-yellow-main text-sm text-center py-[10px] rounded-[4px] text-black-main hover:bg-yellow-hover hover:cursor-pointer active:translate-y-[0.5px] active:bg-yellow-main`,`${className}`)}
      {...props}
    >
      {children}
    </button>
  );
}
