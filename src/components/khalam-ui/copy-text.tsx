import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "./button";

interface CopyTextProps {
  text: string;
  textToCopy?: string;
  className?: string;
}

export default function CopyText({
  text,
  textToCopy,
  className,
}: CopyTextProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(textToCopy || text);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 bg-card border-dotted border-2 border-border px-1 py-0.5 text-sm",
        className
      )}
    >
      <p>{text}</p>
      <button
        className="text-xs cursor-pointer focus:outline-none"
        onClick={handleCopy}
      >
        {isCopied ? "copied" : "[copy]"}
      </button>
    </div>
  );
}
