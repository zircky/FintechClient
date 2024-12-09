import Image from 'next/image'
import logo from '@/assets/img/logo.svg'
import normal from '@/assets/img/sidebar/normal.svg'
import Link from 'next/link'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export function SidebarHeader({toggleSidebar}: {toggleSidebar: () => void}) {
	return (
		<div className={'flex justify-around'}>
			<Link href={PUBLIC_PAGE.HOME} className={'overflow-hidden'}><span><Image src={logo} alt={"logo"} width={165} height={48}/></span></Link>
			<button onClick={toggleSidebar}><Image src={normal} alt={normal} className={'mr-[4px]'} /></button>
		</div>
	)
}