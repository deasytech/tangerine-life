import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button';

interface Props {
  price: string;
  linkHref: string;
  image: string;
  text: string;
}

const KeyFigures = ({ price, linkHref, image, text }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="bold-48 text-green-base flex gap-1">
        <span className="regular-20">₦</span>
        <span>{price}</span>
      </h3>
      <Link href={linkHref}>
        <Button variant="green" size="lg" className="gap-2 rounded-full">
          <Image src={image} alt={text} width={12} height={12} />
          {text}
        </Button>
      </Link>
    </div>
  )
}

export default KeyFigures