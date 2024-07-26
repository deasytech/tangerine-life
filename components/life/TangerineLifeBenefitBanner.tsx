import Image from 'next/image'

const TangerineLifeBenefitBanner = () => {
  return (
    <section className="max-container padding-container mt-32">
      <div className="bg-orange-50 flex gap-8 px-12 py-20 rounded-2xl relative">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="bold-48 text-green-700">Who benefits when you buy Tangerine Life Insurance Products?</h3>
          <p className="regular-18 text-generic-800">With Tangerine Life Insurance, everyone benefits. As the policyholder, you gain peace of mind, while your beneficiaries receive financial security.
            It's a win-win for all, ensuring comprehensive protection and reassurance.</p>
        </div>
        <Image
          src="/images/life/home-benefit-img.png"
          alt="benefit"
          width={571} height={583}
          className="absolute -top-28 right-20 max-md:hidden lg:flex"
        />
      </div>
    </section>
  )
}

export default TangerineLifeBenefitBanner