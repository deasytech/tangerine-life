import Link from "next/link"
import { Button } from "@/components/ui/button"

const MoreLinks = () => {
  return (
    <section className="relative bg-green-50 mt-20">
      <div className="max-container padding-container py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link href="/contact" className="w-full text-green-base hover:bg-green-base hover:text-white rounded-md">
          <div className="w-full py-2 text-center font-bold text-xl">SELF SERVICE</div>
        </Link>
        <Link href="/make-claim" className="w-full text-green-base hover:bg-green-base hover:text-white rounded-md">
          <div className="w-full py-2 text-center font-bold text-xl">MAKE A CLAIM</div>
        </Link>
        <Link href="/" className="w-full text-green-base hover:bg-green-base hover:text-white rounded-md">
          <div className="w-full py-2 text-center font-bold text-xl">RENEW MY POLICY</div>
        </Link>
        <Link href="/get-started" className="w-full text-green-base hover:bg-green-base hover:text-white rounded-md">
          <div className="w-full py-2 text-center font-bold text-xl">GET A QUOTE</div>
        </Link>
      </div>
    </section>
  )
}

export default MoreLinks