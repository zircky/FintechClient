import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useMutation } from '@tanstack/react-query'
import type { IAuthData, IAuthFrom } from '@/types/auth.type'
import { authService } from '@/service/auth/auth.service'
import type { SubmitHandler, UseFormReset } from 'react-hook-form'
import { PUBLIC_PAGE } from '@/config/public-page.config'
import axios from 'axios'
import toast from 'react-hot-toast'

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthFrom>) {
	const router= useRouter()
	const [isPending, startTransition] = useTransition()

	const {mutateAsync, isPending: isAuthPending} = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data),
	})

	const onSubmit: SubmitHandler<IAuthFrom> = data => {

		toast.promise(mutateAsync(data), {
			loading: 'Loading...',
			success: () => {
				startTransition(() => {
					reset()
					router.push(PUBLIC_PAGE.HOME)
				})
				return 'Success login!'
			},
			error: (e: { response: { data: { message: any } } }) => {
				if(axios.isAxiosError(e)) {
					return e.response?.data?.message
				}
			}
		})
	}

	const isLoading = isPending || isAuthPending

	return {
		onSubmit,
		isLoading
	}
}