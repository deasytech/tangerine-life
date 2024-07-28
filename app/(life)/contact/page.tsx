import ContactTabs from '@/components/ContactTabs'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <section className="relative max-container padding-container">
      <div className='max-container pt-40 pb-16'>
        <h1 className='bold-32 md:bold-56 text-green-base mb-2'>Contact us</h1>
        <p className='regular-18 text-generic-700'>Get in touch with any of our business touch points.</p>
      </div>

      <ContactTabs />

      <div className="mt-6 bg-green-50 p-10 w-full md:w-2/3 space-y-3 rounded-3xl">
        <h3 className="text-green-950 text-4xl font-gilroy-medium">Still Have Questions?</h3>
        <div className="flex gap-6 justify-between items-center text-base text-green-950 font-gilroy-light">
          <p>We're here to help</p>
          <p>For General Inquiries</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-base text-green-950 font-gilroy-light">
          <div className="flex items-center gap-3 py-2 px-4 border border-green-950 rounded-full w-full">
            <Mail size={16} />
            <p>wecare@tangerine.africa</p>
          </div>
          <div className="flex items-center gap-3 py-2 px-4 border border-green-950 rounded-full w-full">
            <Phone size={16} />
            <p>02-016309500</p>
          </div>
          <div className="flex items-center gap-3 py-2 px-4 border border-green-950 rounded-full w-full">
            <Mail size={16} />
            <p>hello@tangerine.africa</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page