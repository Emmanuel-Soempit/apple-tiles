import { ReactNode } from "react";

export const SideBox = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-col gap-[4%] w-full lg:w-[30%] col-span-1 lg:max-h-screen lg:h-screen h-[120vh] min-h-screen">
      {children}
    </ul>
  );
};
