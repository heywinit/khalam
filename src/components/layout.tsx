"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}
