"use client";

import { cn } from "@/lib/utils";
import CopyText from "./khalam-ui/copy-text";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background border-r border-border transition-all duration-300 ease-in-out px-12 pt-24 pb-8 w-96 ",
        className
      )}
    >
      {/* Content */}
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2 bg-foreground text-background border-dotted border-2 border-border px-1 py-0.5">
            khalam.
          </div>
          <p className="text-sm">
            yet another ui library. this one aims to give a retroesque
            terminalish vibe. it's almost as if we don't already spend enough
            time in the terminal.
          </p>
          <div>
            <CopyText text="npx khalam-ui" />
          </div>
        </div>
        <div>{"наполни степь цветами в день ее приезда"}</div>
      </div>
    </div>
  );
}
