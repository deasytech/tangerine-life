import { CSR_PHOTOS } from '@/constants/life'
import Image from 'next/image'
import Link from 'next/link'

const CSRPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full space-y-3 md:w-1/2">
          <h1 className="bold-32 md:bold-56 text-green-900">Corporate Social Responsibility</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We are committed to making a positive impact on the Health and well-being of our community. As a responsible HMO, we understand the importance of Corporate Social Responsibility (CSR) in contributing to a healthier and happier society. Our CSR initiatives are designed to address critical health-related issues, promote wellness, and create a lasting positive impact on the communities we serve.</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/life/csr-banner.png" alt="csr" width={589} height={393} className="w-full object-contain" />
        </div>
      </section>

      {CSR_PHOTOS.map((csr) =>
        <section key={csr.title} className="relative max-container padding-container mt-32">
          <div className="w-full space-y-2 max-w-xl">
            <p className="regular-14 text-generic-950 uppercase">{csr.subTitle}</p>
            <h3 className="bold-40 text-blue-950 font-gilroy-semibold">{csr.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {csr.photos.map((img) =>
              <Image key={img} src={img} alt={csr.title} width={382} height={264} className="w-full object-contain" />
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default CSRPage