'use client'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '@/ui/Field'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import auth from '@/assets/img/auth.svg'

interface IAuthFrom {
	username: string,
	password: string,
	confirmPassword?: string
}

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {register, handleSubmit, formState: {errors}, watch} = useForm<IAuthFrom>({
		mode: 'onChange'
	})

	const password = watch('password')

	const onSubmit: SubmitHandler<IAuthFrom> = data => {
		if (isLogin) {
			// Handle login logic here
      console.log('Login:', data)
		} else {
			// Handle registration logic here
      console.log('Registration:', data)
		}
	}

	return (
		<div className={'flex justify-center items-center'}>
			<Image src={auth} alt={'auth'} className={''}/>
			<div className={'max-w-md mx-auto mt-8'}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label={'Username'}
						type={'text'}
						registration={register('username', { required: 'Username is required' })}
						error={errors.username?.message}
						placeholder={'Username'} />
					<Field
						label={'Password'}
						type={'password'}
						registration={register('password', { required: 'Password is required', minLength: 8 })}
						error={errors.password?.message}
						placeholder={'Password'} />
					{!isLogin && <Field
						label={'Confirm Password'}
						type={'password'}
						registration={register('confirmPassword', {
							required: 'Password need confirm',
							validate: value => value === password || 'Passwords don`t match'
						})}
						error={errors.confirmPassword?.message}
						placeholder={'Confirm Password'} />}
					<Button type={'submit'}>{isLogin ? 'Sing In' : 'Sing Up'}</Button>
				</form>
				<div className={'flex justify-center mb-6 gap-1'}>
					<button type={'button'}
									className={''}
									onClick={() => setIsLogin(true)}>Sing In
					</button>
					<button type={'button'}
									className={''}
									onClick={() => setIsLogin(false)}>Sing Up
					</button>
				</div>
			</div>
		</div>
	)
}