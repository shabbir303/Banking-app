"use client"
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";


const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/"
                 className="mb-12 cursor-pointer items-center gap-2 flex"
                >
                    <Image 
                    src="/icons/logo.svg"
                    alt="logo"
                    width={34}
                    height={34}
                    className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo ">Horizon</h1>
                </Link>

                {sidebarLinks.map((item, index)=>{
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return(
                        <Link 
                        href={item.route} 
                        key={index}
                        className={cn("sidebar-link",{"bg-bank-gradient":isActive})}
                        >
                            <div className="relative size-6 ">
                                <Image
                                  src={item.imgURL}
                                  alt={item.label}
                                //   width={24}
                                //   height={24}
                                fill
                                className={cn({"brightness-[3] invert-0":isActive})}
                                />
                                
                            </div>
                            <p className={cn("sidebar-label",{"!text-white":isActive})}>
                                    {item.label}
                                </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    );
};

export default Sidebar;