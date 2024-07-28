import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import AvailableRidersCard from '@/components/life/cards/AvailableRidersCard'
import { AVAILABLE_RIDERS } from '@/constants/life'
import MoreLinks from '@/components/life/MoreLinks'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Memorial Plan" textTheme="text-green-500" />
          <h1 className="bold-32 md:bold-56 text-green-900">Memorial Plan</h1>
          {/* <p className="regular-18 text-generic-950 !leading-[145%]">Group Life Insurance provides protection to a group of persons or employees for life changing events.It is typically provided by an employer to their employees</p>
          <Link href="/get-quote">
            <Button variant="green" size="lg" className="mt-4">Get a Quote</Button>
          </Link> */}
        </div>
        {/* <div className="w-full flex-[3]">
          <Image src="/images/life/group-life-banner.png" alt="Memorial Plan" width={696} height={364} className="w-full object-contain" />
        </div> */}
      </section>

      {/* <section className="relative max-container padding-container mt-20">
        <h2 className="text-green-base text-2xl font-gilroy-semibold mb-3">About this plan</h2>
        <div className="text-generic-950 text-base font-gilroy-medium space-y-2">
          <p>The cover provides payment of Death benefit as a lump sum (subject to a minimum of3 times Total Emolument of the employee) to the nominated beneficiaries of any deceased employee.</p>
          <p>It  covers a defined group of people, for example, the members of a society or Professional association, or the employees of a particular employer.</p>
          <p>Group Life Insurance is a valuable employee benefit, which can pay a tax-free lump sum or taxable dependants' pension for the loved ones of an employee who dies whilst covered by the policy.</p>
          <p>The Pension Reform Act 2014 makes Group Life compulsory for employees in  active service, the scheme shall apply to employees who are in the employment of an organisation in which there are 3 or more employees.</p>
        </div>
      </section> */}

      {/* <section className="relative max-container padding-container mt-32">
        <h3 className="bg-green-base text-white p-3 text-2xl text-center font-gilroy-semibold mb-4">Available Riders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {AVAILABLE_RIDERS.map((item: { name: string; desc: string }) =>
            <AvailableRidersCard
              key={item.name}
              name={item.name}
              desc={item.desc}
            />
          )}
        </div>
      </section> */}

      <MoreLinks />
    </>
  )
}

export default Page