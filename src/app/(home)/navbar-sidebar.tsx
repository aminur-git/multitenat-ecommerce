import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"

interface NavbarItems {
    href: string,
    children: React.ReactNode,
    isActive: boolean,
}

interface props {
    items: NavbarItems[],
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export const NavbarSidebar = ({ items, open, onOpenChange }: props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle className="">Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <div className="flex flex-col h-full overflow-y-auto pb-2">
                    {items.map((item) => (
                        <Link onClick={() => onOpenChange(false)} key={item.href} href={item.href} className="p-4 w-full hover:bg-black hover:text-white text-base font-medium">{item.children}</Link>
                    ))}
                    <div className="border-t flex flex-col pt-2">
                        <Link onClick={() => onOpenChange(false)} href="/sign-in" className="p-4 w-full hover:bg-black hover:text-white text-base font-medium">Login</Link>
                        <Link onClick={() => onOpenChange(false)} href="/sign-up" className="p-4 w-full hover:bg-black hover:text-white text-base font-medium">Sign Up</Link>
                    </div>
                </div>


            </SheetContent>
        </Sheet >
    )
}
