
import type { ISidebarType } from '@/components/layout/sidebar/sidebar.type'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	item: ISidebarType
	isActive: boolean
}
export function MenuItem({item, isActive}: Props) {

	return (
		<li className={
			isActive
				? "flex w-[216px] h-[56px] items-center bg-DarkActive hover:bg-darkBlue"
				: "flex w-[216px] h-[56px] items-center hover:bg-darkBlue"
		}>
			<Link href={item.href} className={"flex items-center ml-[20px] my-[16px]"}>
				<Image src={
					isActive ? item.active : item.icon
				} alt={item.label} className={"w-6 h-6 mr-[16px]"} />
				<span className={isActive
					? "text-primary text-lg" : "text-white text-lg"}>{item.label}</span>
			</Link>
		</li>
	)
}