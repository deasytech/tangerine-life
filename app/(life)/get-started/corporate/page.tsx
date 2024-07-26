import Image from "next/image"
import { RetailForm } from "@/components/life/forms/retail-form"
import GoBackButton from "@/components/GoBackButton"

const Page = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-32">
        <Image
          src="/images/life/buy-policy-banner.png"
          alt="network provider"
          width={592}
          height={708}
          className="w-full"
        />

        <div className="flex flex-col w-full gap-6 pb-16">
          <div className="space-y-6 mb-4">
            <h3 className="text-green-base text-5xl font-normal font-gilroy-semibold leading-10">Hello there!</h3>
            <p className="text-neutral-500 text-lg font-normal font-gilroy-semibold">Thank you for expressing interest in our products. You are few steps away from covering all that matters to you. Please fill out the short form and we will get back to you.</p>
          </div>
          <RetailForm />
        </div>
      </div>
    </section >
  )
}

export default Page