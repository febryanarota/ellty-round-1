import { cn } from "@/utils";

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[20px] w-full px-[15px]",
        className
      )}
    >
      <div
        className="
          absolute
          left-[15px]
          right-[15px]
          top-1/2
          -translate-y-1/2
          h-0
          bg-border-main
          border-t-[0.7px]
        "
      />
    </div>
  );
}
