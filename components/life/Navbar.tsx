"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "@/components/life/MobileNavbar";
import { NavbarMenu } from "./NavbarMenu";

const Navbar = () => {
  const pathname = usePathname();

  const hiddenPaths = [
    "/get-quote",
    "/make-claim",
    "/buy-policy",
    "/renew-policy",
    "/get-started",
    "/get-started/corporate",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/">
          <Image
            src="/images/life/logo.svg"
            alt="Tangerine Africa"
            width={127}
            height={40}
          />
        </Link>

        <div className="hidden lg:flex">
          <NavbarMenu />
        </div>

        <div className="lg:flexCenter hidden gap-4">
          <Link href="/get-started" className="btn_green rounded-lg">
            Get Started
          </Link>
        </div>

        <MobileNavbar />
      </nav>
    </div>
  );
};

export default Navbar;
