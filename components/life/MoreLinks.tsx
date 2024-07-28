import Link from "next/link"
import { Button } from "@/components/ui/button"

const MoreLinks = () => {
  return (
    <section className="relative bg-green-50 mt-20">
      <div className="max-container padding-container py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link href="/contact" className="w-full">
          <Button variant="green" size="lg" className="w-full">SELF SERVICE</Button>
        </Link>
        <Link href="/make-claim" className="w-full">
          <Button variant="green" size="lg" className="w-full">MAKE A CLAIM</Button>
        </Link>
        <Link href="/" className="w-full">
          <Button variant="green" size="lg" className="w-full">RENEW MY POLICY</Button>
        </Link>
        <Link href="/get-started" className="w-full">
          <Button variant="green" size="lg" className="w-full">GET A QUOTE</Button>
        </Link>
      </div>
    </section>
  )
}

export default MoreLinks