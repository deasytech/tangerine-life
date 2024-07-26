import Image from 'next/image'
import { naira } from '@/lib/utils'

interface Props {
  image: string;
  title: string;
  description: string;
}

const LifeInsuranceCard = ({image, title, description}: Props) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex gap-4">
        <Image src={image} alt="Life Cover" width={32} height={32} />
        <p className="regular-24 !font-gilroy-semibold text-green-700">{title}</p>
      </div>
      <p className="regular-18 text-generic-800">{description}</p>
    </div>
  )
}

export default LifeInsuranceCard