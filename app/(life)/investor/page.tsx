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
            price="8.89B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Gross written premium"
          />
          <KeyFigures
            price="2.49B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Profit before tax"
          />
          <KeyFigures
            price="6.18B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Insurance Service Revenue"
          />
          <KeyFigures
            price="8.38B"
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
            <Link href="/TANGERINE_Life_2023_IFRS_17_FS_signed.pdf" target="_blank" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-green-base text-base font-normal font-gilroy-semibold">Read report</p>
              <ArrowRight className="text-green-base" />
            </Link>
          </div>
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