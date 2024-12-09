'use client'
import { type PropsWithChildren, useState } from 'react'
import cn from 'clsx'

import styles from './Layout.module.scss'

import Sidebar from '@/components/layout/sidebar/Sidebar'
import { Content } from '@/components/layout/content/Content'


export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(!isShowedSidebar)
	}

	return (
		<main className={cn('flex', isShowedSidebar ?
		styles.showedSidebar : styles.hidedSidebar)}>
			<Sidebar toggleSidebar={toggleSidebar}/>
			<Content>{children}</Content>
		</main>
	)
}