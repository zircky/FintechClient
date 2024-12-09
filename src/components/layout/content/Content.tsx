import type { PropsWithChildren } from 'react'
import { Header } from '@/components/layout/content/header/Header'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div style={{
			flex: '1 1 0%'
		}}>
			<Header/>
			<section>{children}</section>
		</div>
	)
}