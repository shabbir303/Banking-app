"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { sidebarLinks } from "../../../constants"
import Link from "next/link"
import { cn } from "../../../lib/utils"
import { usePathname } from "next/navigation"

const MobileNav = ({user}:MobileNavProps) => {
    const pathname = usePathname();
    return (
        <Sheet >
        <SheetTrigger asChild>
          <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="Mobile Menu icon"
          className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white border-none" side="left">
       
                <Link href="/"
                 className="cursor-pointer items-center gap-1 px-4 flex"
                >
                    <Image 
                    src="/icons/logo.svg"
                    alt="logo"
                    width={34}
                    height={34}
                    
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1 ">Horizon</h1>
                </Link>

                <div className="mobilenav-sheet">
                <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                    {sidebarLinks.map((item, index)=>{
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return(
                        <SheetClose asChild key={index}>
                            <Link 
                        href={item.route} 
                        key={index}
                        className={cn("mobilenav-sheet_close w-full",{"bg-bank-gradient":isActive})}
                        >
                            <div className="relative size-6 ">
                                <Image
                                  src={item.imgURL}
                                  alt={item.label}
                                  width={24}
                                  height={24}
                                
                                className={cn({"brightness-[3] invert-0":isActive})}
                                />
                                
                            </div>
                            <p className={cn("text-16 font-semibold text-black-2",{"text-white":isActive})}>
                                    {item.label}
                                </p>
                        </Link>
                        </SheetClose>
                        
                    )
                })}
                user
                    </nav>
                  </SheetClose>
                  FOOTER
                </div>

               
            
        </SheetContent>
      </Sheet>
    );
};

export default MobileNav;