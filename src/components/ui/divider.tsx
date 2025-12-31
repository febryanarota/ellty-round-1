import { cn } from "@/utils";

export default function Divider({className}: {className?: string}) {
  return (
    <div className={cn(`border-border-main border-b-[0.7px] w-full my-[10px]`, className)}>
    </div>
  )
};
