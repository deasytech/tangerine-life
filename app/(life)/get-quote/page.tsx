import { Suspense } from 'react'
import Image from 'next/image'
import GoBackButton from '@/components/GoBackButton'
import { GetQuoteForm } from '@/components/life/forms/buy-now-form'

const Page = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-32">
        <Image
          src="/images/life/get-quote-banner.png"
          alt="network provider"
          width={520}
          height={708}
          className="w-full max-md:hidden"
        />

        <div className="flex flex-col w-full gap-6 mb-6">
          <div className="space-y-6 mb-4">
            <h3 className="text-green-700 text-5xl font-normal font-gilroy-semibold leading-10">Hello there!</h3>
            <p className="regular-18 text-generic-800">Thank you for expressing interest in our products. You are few steps away from covering all that matters to you. Please fill out the short form and we will get back to you.</p>
          </div>
          <Suspense fallback={<div>Loading quotation form...</div>}>
            <GetQuoteForm />
          </Suspense>
        </div>
      </div>
    </section >
  )
}

export default Page