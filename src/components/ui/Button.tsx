import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({isLoading, children, ...props}: Props) {
	return (
		<button className={''} disabled={isLoading || props.disabled}
		{...props}>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}