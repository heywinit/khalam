"use client";

import { cn } from "@/lib/utils";
import CopyText from "./khalam-ui/copy-text";
import { X } from "lucide-react";

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ className, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative flex flex-col h-full bg-background border-r border-border transition-all duration-300 ease-in-out px-6 lg:px-12 pt-24 pb-8 w-80 lg:w-96 z-50",
          // Mobile responsive classes
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-muted rounded-md transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

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
    </>
  );
}
