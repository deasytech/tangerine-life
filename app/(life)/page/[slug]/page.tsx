import { COMPLIANCE } from '@/constants/life';
import { ParamsProps } from '@/types'

const FooterPages = ({ params }: ParamsProps) => {
  const page = COMPLIANCE.filter((item: { slug: string; }) => item.slug === params.slug)[ 0 ];

  return (
    <section className="relative max-container padding-container mt-24">
      <div className="h-full flex flex-col justify-center items-start gap-4">
        <div className='lg:mt-5'>
          <p className='regular-14 text-generic-500 uppercase'>Updated on: {page?.date}</p>
        </div>
        <h1 className="bold-32 text-green-base max-w-3xl lg:bold-56 items-center">
          {page?.title}
        </h1>
        {page?.description && <div className="regular-16 compliance" dangerouslySetInnerHTML={{ __html: page?.description }} />}
      </div>
    </section>
  )
}

export default FooterPages