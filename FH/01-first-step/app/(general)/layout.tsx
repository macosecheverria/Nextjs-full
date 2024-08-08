import { Navbar } from "@/components";
import { ReactNode } from "react";

export default function GeneralLayout({children}: {children: ReactNode}) {
    return (
        <>
        <Navbar/>
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hello root Layout General</span>
            {children}
        </main>
        
        </>
    )
}