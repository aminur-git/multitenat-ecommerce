"use client"
import Link from "next/link"
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { NavbarSidebar } from "./navbar-sidebar"
import { useState } from "react"
import { Menu } from "lucide-react"


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

interface NavbarItemsProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive
}
    :
    NavbarItemsProps) => {
    return (
        <Button
            asChild
            variant={"outline"}
            className={cn("bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg", isActive && "bg-black text-white hover:text-white hover:bg-black")}
        >
            <Link href={href}>{children}</Link>
        </Button>
    )
}

const navbarItems = [
    {
        href: "/",
        children: "Home",
        isActive: false
    },
    {
        href: "/price",
        children: "Price",
        isActive: false
    },
    {
        href: "/features",
        children: "Features",
        isActive: false
    },
    {
        href: "/about",
        children: "About",
        isActive: false
    },
    {
        href: "/contact",
        children: "Contact",
        isActive: false
    },
]

export const Navbar = () => {

    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white text-sm ">
            <Link href={"/"} className="pl-6 flex items-center" >
                <span className={cn("text-5xl", poppins.className)}>funroad</span>
            </Link>

            <div className="items-center gap-4 hidden md:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} {...item} isActive={item.href === pathName} >{item.children} </NavbarItem>
                ))}
            </div>
            <NavbarSidebar open={open} onOpenChange={setOpen} items={navbarItems}></NavbarSidebar>

            <div className="hidden lg:flex items-center">
                <Button variant={"secondary"} className="border-0 border-l px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"><Link href={"/sign-in"}>Login</Link> </Button>
                <Button variant={"secondary"} className="border-0 border-l px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"><Link href={"/sign-up"}>Sign Up</Link></Button>
            </div>

            <div className="flex items-center lg:hidden">
                <Button variant={"ghost"} onClick={() => setOpen(true)}
                    className="size-12 border-transparent bg-white"
                >
                    <Menu />
                </Button>
            </div>
        </nav>
    )
}