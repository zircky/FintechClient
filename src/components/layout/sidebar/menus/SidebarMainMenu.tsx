'use client'
import { SidebarData } from '@/components/layout/sidebar/sidebar.data'
import { MenuItem } from '@/components/layout/sidebar/menus/MenuItem'
import { match } from 'path-to-regexp'
import { usePathname } from 'next/navigation'

export function SidebarMainMenu() {
	const path = usePathname()
	return (
		<nav>
			<ul className={"flex flex-col pt-[2rem] ml-[20px]"}>
				{SidebarData.map((menuItem, index) => (
					<MenuItem item={menuItem} key={index} isActive={!!match(menuItem.href)(path)}/>
				))}
			</ul>
		</nav>
	)
}