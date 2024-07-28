import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import AvailableRidersCard from '@/components/life/cards/AvailableRidersCard'
import { TANG_BETTA_PLANS } from '@/constants/life'
import MoreLinks from '@/components/life/MoreLinks'
import { ArrowRight } from 'lucide-react'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Tang Betta Plan" textTheme="text-green-500" />
          <h1 className="bold-32 md:bold-56 text-green-900">Tang Betta Plan</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">The Tang Betta Life plan is a pure risk-based plan which pays out a
            percentage of the premium paid by policyholder during the policy period in the event that the insured events do not crystallize. Otherwise, the sum assured is payable to the policyholder.</p>
          <Link href="/get-quote">
            <Button variant="green" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/life/tang-betta-banner.png" alt="Tang Betta Plan" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {TANG_BETTA_PLANS.map((item: { title: string; description: string }) =>
            <AvailableRidersCard
              key={item.title}
              name={item.title}
              desc={item.description}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="bg-green-base text-white p-3 text-2xl text-center font-gilroy-semibold mb-4">Claims Procedures</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <AvailableRidersCard
            name="Claim Documentations"
            desc={`
                <ul className="list-disc">
                <li>a) Medical Certificate of cause of death,</li>
                <li>b) Valid proof of identity of named beneficiary (on the death of the policyholder).</li>
                <li>c)Police Report if death was caused by Accident, copy of Life Assured identity.</li>
                </ul>
                `}
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="text-3xl md:text-5xl font-semibold text-green-base mb-10">Other plans</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-green-900">Mortgage Plan</h3>
              <div className="regular-16 text-generic-950" dangerouslySetInnerHTML={{ __html: "This is a decreasing term assurance policy intended to ensure repayment of the mortgage loan in event of death of the Life Assured before full repayment of the mortgage loan on his house." }} />
            </div>
            <Link href="/retail-plans/mortgage-protection-plan">
              <Button variant="green" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-green-900">Family Welfare Plan</h3>
              <div className="regular-16" dangerouslySetInnerHTML={{ __html: "An annual renewable term assurance that pays out the sum assured in the event of the policyholders' death." }} />
            </div>
            <Link href="/retail-plans/family-welfare-plan">
              <Button variant="green" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-green-900">Triple Plan</h3>
              <div className="regular-16" dangerouslySetInnerHTML={{ __html: "An anticipated endowment plan that pays out benefits at 1/3, 2/3 period and at the end of the policy term in the ratio of 30% (25%), 30% (25%) and 100% of the sum assured." }} />
            </div>
            <Link href="/retail-plans/triple-plan">
              <Button variant="green" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MoreLinks />
    </>
  )
}

export default Page