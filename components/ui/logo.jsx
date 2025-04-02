import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image 
        src="/logo.png" 
        alt="Onuoha Systems" 
        width={50} 
        height={50} 
        className="h-10 w-auto"
        priority
      />
      <span className="text-xl font-bold text-white">Onuoha Systems</span>
    </Link>
  )
} 