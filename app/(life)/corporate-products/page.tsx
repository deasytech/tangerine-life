import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CoreValue from '@/components/CoreValue'
import { CORPORATE_OFFERED, FAQ, CORPORATE_PLANS } from '@/constants/life'
import PlansCard from '@/components/cards/PlansCard'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/life/MoreLinks'
import TangerineLifeBenefitBanner from '@/components/life/TangerineLifeBenefitBanner'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/life/corporate-product-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 md:ml-28 h-full flex flex-col gap-6 justify-center items-start w-full max-w-lg">
            <h1 className="bold-32 lg:bold-48 items-center text-white">
              Corporate Products
            </h1>
            <p className="text-lg font-gilroy-medium text-white">A tailored solution for your company's insurance needs. With our comprehensive coverage and flexible options, we provide peace of mind for both employers and employees. Secure your team's future with Tangerine Life Corporate Plan today.</p>
            <Link href="/get-quote">
              <Button variant="green" size="lg" className="gap-2">Get a Quote <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">our insurance benefits</h5>
          <h3 className="bold-32 md:bold-48 text-green-base">Benefits</h3>
          <p className="regular-16 text-generic-700 max-w-sm">For our corporate plans, our life insurance offerings provide crucial financial security and peace of mind tailored to the needs of businesses and their employees.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {CORPORATE_OFFERED?.map((benefit) =>
            <CoreValue
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              textTheme="text-green-900"
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">plans</h5>
          <h3 className="bold-32 md:bold-48 text-green-base">Our Products</h3>
          <p className="regular-16 text-gray-600 max-w-sm">You can enjoy even better protection with our optional services, tailored to your needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {CORPORATE_PLANS.map((plan) =>
            <PlansCard
              key={plan.title}
              link={plan.link}
              title={plan.title}
              text={plan.text}
              textTheme="text-green-900"
              btnTheme="btn_green"
            />
          )}
        </div>
      </section>

      <TangerineLifeBenefitBanner />

      <MoreLinks />

      <section className="relative max-container padding-container flex flex-col md:flex-row gap-6 mt-32">
        <div className="w-full md:w-1/3 space-y-4">
          <h3 className="bold-32 md:bold-48 text-green-base">Frequently Asked Questions</h3>
          <p className="text-lg font-gilroy-semibold text-green-base pb-3">We have provided answers to some of the questions you might have in mind.</p>
          <Link href="/frequently-asked-questions">
            <Button variant="darkgreen" size="lg" className='gap-2'>Read more <ArrowRight size={16} /></Button>
          </Link>
        </div>
        <div className="w-full md:w-2/3">
          <Accordion type="single" collapsible className="w-full">
            {FAQ?.slice(0, 3).map((item) =>
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="regular-24 text-green-900 !font-gilroy-semibold text-start">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-green-900 font-gilroy-regular">{item.answer}</AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default Page