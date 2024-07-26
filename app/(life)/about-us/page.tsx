import CoreValue from '@/components/life/CoreValue'
import { CORE_VALUES } from '@/constants/life'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full space-y-3">
          <h1 className="bold-48 text-green-950">Who we are</h1>
          <p className="regular-18 text-green-950 !leading-[165%]">At Tangerine Life, we're committed to helping you secure your financial future with confidence. Our range of innovative insurance products is designed to meet your unique needs, providing peace of mind for you and your loved ones. Explore our offerings and discover how we can protect what matters most to you.</p>
        </div>
        <div className="w-full bg-green-base flex items-center justify-center py-10 rounded-3xl">
          <Image src="/icons/life/white-logo-icon.svg" alt="About us" width={256} height={336} />
        </div>
      </section>

      <section className='relative max-container padding-container flex flex-col md:flex-row gap-8 mt-16'>
        <div className='bg-green-950 flex items-center justify-center p-8 w-full rounded-3xl gap-8'>
          <div className='flex flex-col gap-4'>
            <p className='regular-14 !leading-7 !font-gilroy-medium text-white uppercase'>how it started</p>
            <p className='bold-36 text-white'>Our History</p>
            <p className="text-white text-base leading-7">Tangerine Life is a leading provider of insurance solutions, dedicated to enhancing the financial security of individuals and businesses across Nigeria. Backed by deep consumer insights and cutting-edge technology, we offer a comprehensive suite of carefully tailored products designed to meet the diverse needs of our customers
              Tangerine Life is a locally registered and regulated life insurance company under the National Insurance Commission (NAICOM)- RIC 042, with its head office in Lagos and sales outlets in Abuja and Port Harcourt. The company is a product of the merger between Metropolitan Life and ARM Life Plc.</p>
          </div>
        </div>
        <div className='bg-green-50 w-full grid grid-cols-2 rounded-3xl p-4 gap-4'>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-green-950'>228,000+</p>
            <p className='regular-16 text-generic-950'>Enrollees</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-green-950'>186+</p>
            <p className='regular-16 text-generic-950'>Staff strength</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-green-950'>9</p>
            <p className='regular-16 text-generic-950'>Locations across Nigeria</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-green-950'>1500+</p>
            <p className='regular-16 text-generic-950'>Provider network</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h2 className="bold-48 text-green-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CORE_VALUES.map((value) =>
            <CoreValue
              key={value.title}
              title={value.title}
              icon={value.icon}
              text={value.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-generic-950 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase bg-gray-500 text-white px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>CSR</p>
            <div className="flex items-center gap-3">
              <h2 className="flex-1 bold-48 text-white w-full">
                Our CSR Impact
              </h2>
              <Link href="/csr" className="flex gap-2 items-center rounded-lg btn_white w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-blue-950' />
              </Link>
            </div>
          </div>
          <div className="bg-green-900 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white bg-green-800 px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>Leadership</p>
            <div className="flex items-center gap-3">
              <h2 className="bold-48 text-white w-full">
                Management team and Board
              </h2>
              <Link href="/leadership-team" className="flex gap-2 items-center rounded-lg btn_dark_green w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-white' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage