'use client'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '@/ui/Field'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import auth from '@/assets/img/img.png'

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
		<div className={'flex items-center relative'}>
			<div className={'w-[39.25rem] h-screen bg-accent1'}>

				<Image src={auth} alt={'auth'} className={'top-[392px] absolute'} />
			</div>
			<div className={'w-[412px] h-[560px] mx-auto mt-8 '}>
				<h4 className={'font-medium text-3xl text-pretty w-[412px] h-20'}>{isLogin ? 'Sign in to Unity Exchange' : 'Sign up' }</h4>
				<form onSubmit={handleSubmit(onSubmit)} className={''}>
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
						placeholder={'Password'}
					/>
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
				<div className={'flex justify-center mb-6 gap-1 w-full h-5 mt-4'}>

					{isLogin ? <div className={'flex'}>
						<p className={'mr-[11px]'}>Not a member?</p>
						<button type={'button'}
										className={'text-md font-bold text-primary'}
										onClick={() => setIsLogin(false)}>Sing Up now
						</button>
					</div> : <div className={'block w-full h-8 text-light text-xs'}>
						<p className={'flex text-balance indent-2'}>By signing up I agree that I am 18 years of age or older, to the <p className={'flex text-primary'}>User Agreement</p>, <p className={'flex text-primary'}>Privacy Policy</p>, <p className={'flex text-primary'}>Cookie Policy</p>, and <p className={'flextext-primary'}>E-Sign Consent</p>.</p>
						<button type={'button'}
													 className={'text-primary'}
															onClick={() => setIsLogin(true)}>Sing In
					</button></div>
					}
				</div>
			</div>
		</div>
	)
}