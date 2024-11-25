import { AsideNav } from "./aside-nav";
import { Logo } from "./logo";

export function Aside() {
  return (
    <aside className="flex flex-col gap-5 border-r border-r-zinc-700 p-5">
      <Logo />
      <AsideNav />
    </aside>
  );
}
