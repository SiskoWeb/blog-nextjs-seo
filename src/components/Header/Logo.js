import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
    
        <span className="font-bold dark:font-semibold text-lg md:text-xl">YassineBouchama</span>
    </Link>
  )
}

export default Logo