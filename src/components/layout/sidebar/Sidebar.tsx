import { SidebarHeader } from '@/components/layout/sidebar/header/SidebarHeader'
import { SidebarMainMenu } from '@/components/layout/sidebar/menus/SidebarMainMenu'

export default function Sidebar({toggleSidebar}: {toggleSidebar: () => void}) {
	return (
		<aside className={"border-r border-r-lightGrey bg-dark flex flex-col justify-between z-10 h-screen pt-[25px] whitespace-normal overflow-hidden"}>
			<div>
				<SidebarHeader toggleSidebar={toggleSidebar}/>
				<SidebarMainMenu/>
			</div>
		</aside>
	)
}
