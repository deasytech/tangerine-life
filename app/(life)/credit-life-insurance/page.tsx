import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AvailableRidersCard from '@/components/life/cards/AvailableRidersCard'
import { AVAILABLE_RIDERS } from '@/constants/life'
import MoreLinks from '@/components/life/MoreLinks'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Credit Life Insurance" textTheme="text-green-500" />
          <h1 className="bold-56 text-green-900">Credit Life Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Provides cover for loans granted to Borrowers/mortgagors of a lending institution. It repays the outstanding balance of a loan in the event that the debtor dies or becomes permanently disabled before the loan is fully repaid.</p>
          <Link href="/get-quote">
            <Button variant="green" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/life/credit-life-banner.png" alt="group life assurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <h2 className="text-green-base text-2xl font-gilroy-semibold mb-3">About this plan</h2>
        <div className="text-generic-950 text-base font-gilroy-medium space-y-2">
          <p>Credit Life Assurance provides cover for loans granted to Borrowers/Mortgagors of a lending institution. It repays the outstanding balance of a loan if the debtor dies or becomes permanently disabled before the loan is fully repaid.</p>
          <p>In the event of death/disability, the lending institution will be paid the outstanding amount that is owed by the customer.</p>
          <p>In addition, it provides a strengthening of the value proposition to your customers in that, by taking the proposed cover, the borrower and his/her family will not suffer the loss of the financed asset in the event of death or disability. On this basis, the lending institution may very well recover the premium for this cover from the client as part of the initial financing transaction.</p>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="bg-green-base text-white p-3 text-2xl text-center font-gilroy-semibold mb-4">Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="rounded-2xl space-y-4">
            <p className="text-base text-generic-950 font-gilroy-regular">It gives comfort to Borrowers/Mortgagor of a Lending Institution. In the event of death, the defendant's of the deceased will still keep the property and will not suffer the loss of a financed asset</p>
          </div>
          <div className="rounded-2xl space-y-4">
            <p className="text-base text-generic-950 font-gilroy-regular">It is a Win-Win situation for the Lending Institution and the Customer</p>
          </div>
          <div className="rounded-2xl space-y-4">
            <p className="text-base text-generic-950 font-gilroy-regular">It is very easy to administer. It is usually bundled with the loan amount from inception and the cost will be borne by the customer on a monthly, annual or single premium basis</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="bg-green-base text-white p-3 text-2xl text-center font-gilroy-semibold mb-4">Available Riders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="rounded-2xl space-y-4">
            <p className="text-2xl text-green-base">Permanent Disability</p>
            <p className="text-base text-generic-950 font-gilroy-regular">The permanent disability rider component provides for payment of the benefit amount as a lump sum in the event of the life assured becoming permanently disabled.</p>
          </div>
          <div className="rounded-2xl space-y-4">
            <p className="text-2xl text-green-base">Critical Illness Benefits</p>
            <p className="text-base text-generic-950 font-gilroy-regular">The Critical Illness benefit provides a lump sum benefit that will be paid to a member if he/she is diagnosed as suffering from a listed Critical Illness. The Critical Illness benefit is designed to assist with the payment of expensive medical treatment needed for a member to survive or to be rehabilitated from a Critical Illness.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container flex flex-col md:flex-row gap-8 mt-32">
        <div className="w-full md:w-2/3 bg-green-950 text-white p-10 rounded-2xl space-y-3">
          <h4 className="bg-green-50 text-green-800 text-sm font-gilroy-semibold w-fit rounded-full px-3 py-1">Other Credit Life Product</h4>
          <h2 className="text-4xl">Keyman Assurance</h2>
          <div className="text-base font-gilroy-light space-y-4">
            <p>Keyman Assurance is designed to protect a lending institution in the event of an untimely death/permanent disability of the key staff of a borrowing company. This would be especially useful for the corporate leases that are provided to small/medium-scale organizations.</p>
            <p>The cover is taken on the life of the Key Individual(s), whose sudden death would directly affect the operations and financial standing of the borrower/company and its ability to service the loan obligation.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-green-50 text-green-950 p-10 rounded-2xl space-y-3">
          <h2 className="text-4xl font-gilroy-semibold text-green-800">Credit Life Bundling Options</h2>
          <ul className="list-disc ml-4 space-y-2">
            <li>Life Only Cover</li>
            <li>Life and Permanent Disability Cover</li>
            <li>Life, Permanent Disability and Critical Illness</li>
            <li>Keyman Cover</li>
          </ul>
        </div>
      </section>

      <MoreLinks />
    </>
  )
}

export default Page