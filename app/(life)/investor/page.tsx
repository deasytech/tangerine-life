import KeyFigures from '@/components/KeyFigures'
import SubsidaryImage from '@/components/SubsidiaryImage'
import { Button } from '@/components/ui/button'
import { PRESS } from '@/constants/life'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const InvestorsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-24">
        <div className="h-[693px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/investor-hero.svg')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 h-full flex flex-col gap-3 justify-center items-start w-full max-w-xl">
            <h1 className="bold-56 items-center text-white">
              Investor Relations
            </h1>
            <p className="regular-18 text-white">Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security <br />Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-green-50 rounded-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url('/images/investor-img.svg')",
              backgroundPosition: "bottom right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: "80px",
            }}
          />
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2 relative z-10">
            <h3 className="bold-32 md:bold-48 text-green-950">Company profile</h3>
            <p className="regular-18 text-generic-800 text-center px-6 md:px-0 md:text-start">
              Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security. <br />Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="bold-40 text-green-base">
            Key Figures
          </h2>
          <p className="regular-18 text-generic-800">Tangerine Annual report 2023</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <KeyFigures
            price="8,898,320m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Gross written premium"
          />
          <KeyFigures
            price="2,495,255m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Profit before tax"
          />
          <KeyFigures
            price="6,189,324m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Insurance Service Revenue"
          />
          <KeyFigures
            price="8,383,015m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Shareholders' funds"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-green-base rounded-3xl" style={{
          backgroundImage: "url('/images/annual-report.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-4 flex w-full md:w-1/2">
            <p className="regular-18 text-white">Financial strategy</p>
            <h3 className="bold-32 md:bold-48 text-white">2023 Annual Report</h3>
            <p className="regular-18 text-white">
              Access the Tangerine's earnings-related financial information: the 1Q and 9M activity indicators but also the half-year and annual results
            </p>
            <Link href="/TGIL_2023_FCR_Non-Life_Report_-_Abridged_Version.pdf" target="_blank" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-green-base text-base font-normal font-gilroy-semibold">Read report</p>
              <ArrowRight className="text-green-base" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32 flex flex-col gap-20 md:flex-row items-center">
        <div className="w-full">
          <h3 className="bold-48 mb-12 text-green-950">Press Releases</h3>
          {PRESS.map((press, index) => (
            <Link
              key={press.slug}
              href={`press/${press.slug}`}
              className={`flex flex-col p-4 gap-4 ${index !== PRESS.length - 1 ? 'border-b border-generic-500' : ''
                }`}
            >
              <p className="regular-12">{press.date}</p>
              <p className="regular-16 text-generic-700">{press.title}</p>
            </Link>
          ))}
          <Link href="/" className="flex items-center gap-2 text-green-base w-fit mt-6">
            <span>View all releases</span>
            <ArrowRight size={16} className="text-green-base" />
          </Link>
        </div>
        <div className="w-full px-10 md:px-20 py-16 md:py-28 flex flex-col gap-6" style={{
          backgroundImage: "url('/images/executive-bg.svg')",
          borderRadius: '32px',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <p className="bg-green-100 text-green-base uppercase w-fit p-2 px-4 rounded-full">Corporate governance</p>
          <h3 className="text-green-base bold-48">Group Executives</h3>
          <p className="regular-16 text-generic-800 max-w-md">The Board of Directors is responsible for setting the Company's strategic directions and ensuring their execution, encompassing environmental, social, and governance considerations.</p>
          <Link href="/leadership-team">
            <Button variant="green" size="lg" className="gap-2">
              Learn more
              <Image src="/icons/arrow-top-right.svg" alt="Learn more" width={12} height={12} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24 flex flex-col gap-4">
        <h3 className="bold-40 text-green-950">Annual Financial Reports</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 max-w-full gap-6">
          <SubsidaryImage
            image="/images/life/report1.png"
            hoverImage="/images/life/report1.png"
            name="2023 Annual Report"
            subName="Download file"
            link="/TANGERINE_Life_2023_IFRS_17_FS_signed.pdf"
          />
          <SubsidaryImage
            image="/images/life/report2.png"
            hoverImage="/images/life/report2.png"
            name="2023 Financial Information Report"
            subName="Download file"
            link="/Tangerine_Life_2023_Abridge_Financial_Statement_signed_(002).pdf"
          />
          <SubsidaryImage
            image="/images/life/report3.png"
            hoverImage="/images/life/report3.png"
            name="2023 Financial Condition Report"
            subName="Download file"
            link="/Tangerine_FCR_Final_Signed_report_as_at_31.12.2023_final.pdf"
          />
        </div>
      </section>
    </>
  )
}

export default InvestorsPage