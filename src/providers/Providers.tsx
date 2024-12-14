'use client'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'

const client = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
	// const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}