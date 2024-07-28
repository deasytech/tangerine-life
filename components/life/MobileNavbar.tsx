"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/life";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  href: string;
  key: string;
  label: string;
  subMenu?: NavLink[];
}

const MobileNavbar: React.FC = () => {
  const [ openSubMenu, setOpenSubMenu ] = useState<string | null>(null);
  const [ isSheetOpen, setIsSheetOpen ] = useState<boolean>(false);

  const handleSubMenuToggle = (key: string) => {
    setOpenSubMenu(openSubMenu === key ? null : key);
  };

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="grid grid-cols-1 gap-2 lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Image
            src="/icons/menu.svg"
            alt="hand burger"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="pb-4">
            <SheetTitle>
              <Link href="/">
                <Image
                  src="/images/life/logo.svg"
                  alt="Tangerine Africa"
                  width={127}
                  height={40}
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav>
            <Link href="/" onClick={handleMenuItemClick} className="bg-green-50 flex my-3 p-3 w-full regular-16 text-black transition-all">
              Home
            </Link>
            {NAV_LINKS.map((link: NavLink) => (
              <div key={link.key} className=" bg-green-50">
                {link.subMenu ? (
                  <>
                    <button
                      className="w-full regular-16 text-black flex justify-between p-3 items-center gap-2 cursor-pointer transition-all"
                      onClick={() => handleSubMenuToggle(link.key)}
                    >
                      {link.label}
                      <ChevronDown className="ml-2" size={16} />
                    </button>
                    <div
                      className={`w-full mt-2 ml-4 ${openSubMenu === link.key ? "" : "hidden"
                        }`}
                    >
                      {link.subMenu.map((subLink) => (
                        <Link
                          href={subLink.href}
                          key={subLink.key}
                          className="flex w-full p-2 mb-2 last:mb-0"
                          onClick={handleMenuItemClick}>
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href} onClick={handleMenuItemClick} className="bg-green-50 flex my-3 p-3 w-full regular-16 text-black transition-all">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
