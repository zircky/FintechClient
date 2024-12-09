import { SidebarData } from '@/components/layout/sidebar/sidebar.data'
import { MenuItem } from '@/components/layout/sidebar/menus/MenuItem'

export function SidebarMainMenu() {
	return (
		<nav>
			<ul className={"flex flex-col pt-[2rem] ml-[20px]"}>
				{SidebarData.map((menuItem, index) => (
					<MenuItem item={menuItem} key={index}/>
				))}
			</ul>
		</nav>
	)
}