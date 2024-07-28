import GoBackButton from "@/components/GoBackButton"
import Image from "next/image"
import Link from "next/link"

const GetStartedPage = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>
      <h1 className="bold-32 md:bold-48 text-green-base pt-12 text-center">Get Started</h1>
      <p className="text-center text-lg text-generic-500 mx-auto max-w-lg">There are some information we need to get started, please make sure you provide the right details.</p>
      <div className="text-center mb-12 mt-6">
        <p className="text-base font-gilroy-semibold text-green-500">Select Cover Type</p>
        <div className="h-2 bg-green-base max-w-sm mx-auto my-2" />
      </div>
      <div className="flexCenter">
        <div className="w-full max-w-3xl flex gap-10 justify-center mx-10">
          <Link href="/buy-policy" className="text-center border p-4">
            <div className="w-44 h-44">
              <Image src="/icons/life/retail.svg" alt="retail plan" width={176} height={176} className="" />
            </div>
            <p className="text-base text-green-900 !font-gilroy-semibold mt-3">Retail</p>
          </Link>
          <Link href="/get-started/corporate" className="text-center border p-4">
            <div className="w-44 h-44">
              <Image src="/icons/life/corporate.svg" alt="corporate plan" width={176} height={176} className="" />
            </div>
            <p className="text-base text-green-900 !font-gilroy-semibold mt-3">Corporate</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GetStartedPage