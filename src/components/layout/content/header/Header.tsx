import { MenuItem } from '@/components/layout/content/header/MenuItem'
import { SearchField } from '@/components/layout/content/header/SearchField'
import { HeaderLinks } from '@/components/layout/content/header/HeaderLinks'
import { HeaderProfile } from '@/components/layout/content/header/HeaderProfile'

export function Header() {
	return (
		<header className={'flex h-20 px-16 justify-between items-center'}>
			<SearchField/>
			<div className={'flex items-center gap-6 w-[18.625rem]'}>
				<HeaderLinks/>
				<HeaderProfile/>
			</div>
		</header>
		)
}