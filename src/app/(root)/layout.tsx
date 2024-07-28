import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Shabbir", lastName: "Hossain" };
  return (
    <main className="flex font-inter h-screen w-full">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="menu logo" width={34} height={34} />

          <div>
          <MobileNav user={loggedIn} />
        </div>
        </div>
        
        {children}
      </div>
    </main>
  );
}
