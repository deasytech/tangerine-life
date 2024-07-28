import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import AvailableRidersCard from '@/components/life/cards/AvailableRidersCard'
import { FAMILY_WELFARE_PLANS } from '@/constants/life'
import MoreLinks from '@/components/life/MoreLinks'
import { ArrowRight } from 'lucide-react'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Family Welfare Plan" textTheme="text-green-500" />
          <h1 className="bold-32 md:bold-56 text-green-900">Family Welfare Plan</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">An annual renewable term assurance that pays out the sum assured in the event of the policyholders' death.</p>
          <Link href="/buy-policy">
            <Button variant="green" size="lg" className="mt-4">Buy a Policy</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/life/family-welfare-banner.png" alt="Family Welfare Plan" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {FAMILY_WELFARE_PLANS.map((item: { title: string; description: string }) =>
            <AvailableRidersCard
              key={item.title}
              name={item.title}
              desc={item.description}
            />
          )}
        </div>
        <div className="mt-20 flex gap-8">
          <div className="md:w-1/4 space-y-6">
            <div className="bg-green-base text-white flex items-center justify-center gap-2 py-2 w-fit px-8 rounded-full">
              <p className="text-lg font-gilroy-medium">Product Types</p>
              <ArrowRight />
            </div>
            <p className="text-base font-gilroy-semibold pt-8">Premium</p>
            <p className="text-base font-gilroy-semibold">Sums Assured</p>
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="space-y-6 w-full">
                <div className="border border-green-base text-green-base flex items-center justify-center gap-2 py-2 w-fit px-8 rounded-full">
                  <p className="text-lg font-gilroy-medium">Bronze</p>
                </div>
                <p className="text-base text-generic-950 pt-8">N2,500.00</p>
                <p className="text-base text-generic-950">N250,000.00</p>
              </div>
              <div className="space-y-6 w-full">
                <div className="border border-green-base text-green-base flex items-center justify-center gap-2 py-2 w-fit px-8 rounded-full">
                  <p className="text-lg font-gilroy-medium">Silver</p>
                </div>
                <p className="text-base text-generic-950 pt-8">N4,000.00</p>
                <p className="text-base text-generic-950">N500,000.00</p>
              </div>
              <div className="space-y-6 w-full">
                <div className="border border-green-base text-green-base flex items-center justify-center gap-2 py-2 w-fit px-8 rounded-full">
                  <p className="text-lg font-gilroy-medium">Gold</p>
                </div>
                <p className="text-base text-generic-950 pt-8">N8,000.00</p>
                <p className="text-base text-generic-950">N1,000,000.00</p>
              </div>
              <div className="space-y-6 w-full">
                <div className="border border-green-base text-green-base flex items-center justify-center gap-2 py-2 w-fit px-8 rounded-full">
                  <p className="text-lg font-gilroy-medium">Platinum</p>
                </div>
                <p className="text-base text-generic-950 pt-8">N15,000.00</p>
                <p className="text-base text-generic-950">N2,000,000.00</p>
              </div>
            </div>
          </div>
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