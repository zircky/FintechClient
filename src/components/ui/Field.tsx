import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import cn from 'clsx'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
	label: string
	error?: string
	registration: UseFormRegisterReturn
}

export function Field({label, error, registration, ...props}: Props) {
	return (
		<div className={'mb-4'}>
			<label>
				<span>
					{label}
				</span>
				<input className={cn('', error ? '' : '')}/>
			</label>
			{error && <p className={'text-red-800'}>{error}</p>}
		</div>
	)
}