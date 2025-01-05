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
		<div className={'mb-4 h-20'}>
			<label>
				<span>
					{label}
				</span>
				<input {...props} {...registration} className={cn('block px-3 py-4 w-full bg-DarkActive rounded-xl focus:outline focus:ring focus:border-accent2 focus:bg-lightGrey shadow-none', error ? '' : '')} />
			</label>
			{error && <p className={'text-red-800'}>{error}</p>}
		</div>
	)
}