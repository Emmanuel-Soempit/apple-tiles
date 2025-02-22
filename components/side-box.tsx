import { ReactNode } from "react";

export const SideBox = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-col gap-[4%] w-[30%] col-span-1 md:max-h-screen h-screen min-h-screen">
      {children}
    </ul>
  );
};
