import { ReactNode } from "react"

export const SideBox = ({children}:{children:ReactNode}) => {
    return <ul className="flex flex-col gap-[3%] w-full col-span-1 h-screen">
        {children}
    </ul>
}