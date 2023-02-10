import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <div className="flex items-center justify-between py-5 px-8">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex space-x-2">
        <ConnectButton
          showBalance={{ smallScreen: false, largeScreen: true }}
        />
      </div>
    </div>
  )
}
