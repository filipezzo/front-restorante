import { ReactNode } from "react";
import { Aside } from "../components/aside";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full grid-cols-[240px_1fr]">
      <Aside />
      <main className="flex flex-col p-5">{children}</main>
    </div>
  );
}
