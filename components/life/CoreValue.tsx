import Image from 'next/image'

interface CoreValueProps {
  title: string;
  icon: string;
  text: string;
}

const CoreValue = ({ title, icon, text }: CoreValueProps) => {
  return (
    <div className="space-y-2">
      <Image src={icon} alt={title} width={48} height={48} />
      <h4 className="bold-20 text-green-950 pt-2">{title}</h4>
      <p className="regular-16 text-generic-700">{text}</p>
    </div>
  )
}

export default CoreValue