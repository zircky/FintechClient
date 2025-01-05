'use client'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '@/ui/Field'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import auth from '@/assets/img/img.png'
import link from '@/assets/img/link.svg'
import logo from '@/assets/img/logo.svg'
import Link from 'next/link'
import { PUBLIC_PAGE } from '@/config/public-page.config'
import type { IAuthFrom } from '@/types/auth.type'
import { useAuthForm } from '@/app/auth/useAuthForm'


export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {register, handleSubmit, formState: {errors}, watch, reset} = useForm<IAuthFrom>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useAuthForm(isLogin ? 'login' : 'register', reset)

	return (
		<div className={'flex items-center relative'}>
			<div className={'2xl:w-[39.25rem] 2xl:h-screen 2xl:bg-accent1 lg:w-[25rem] lg:h-screen lg:bg-accent1 '}>
				<span className={'h-[234px] w-[456px] top-11 right-[79.5rem] absolute'}>
					<Link href={PUBLIC_PAGE.HOME}><Image src={logo} alt={logo} width={165} height={48}/></Link>
					<h1 className={'text-6xl'}>The Crypto Asset Exchange</h1>
				</span>
				<Image src={auth} alt={'auth'} className={'2xl:top-[392px] 2xl:right-[74.77rem] lg:top-[383px] lg:right-[43.8rem] hidden lg:block absolute '} />
			</div>
			<div className={'w-[412px] h-[560px] mx-auto mt-8 '}>
				<h4 className={'text-3xl text-pretty w-[412px] h-16'}>{isLogin ? 'Sign in to Unity Exchange' : 'Sign up' }</h4>
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
						placeholder={'Password'}
					/>
					{!isLogin && <Field
						label={'Confirm Password'}
						type={'password'}
						registration={register('confirmPassword', {
							required: 'Password need confirm',
							validate: value => value === watch('password') || 'Passwords don`t match'
						})}
						error={errors.confirmPassword?.message}
						placeholder={'Confirm Password'} />}
					{isLogin && <h5 className={'flex text-primary justify-end mb-[1.875rem]'}><Image src={link} alt={link} width={16} height={16} className={'mr-3 my-1'}/>Forgot Password?</h5>}
					<Button type={'submit'} isLoading={isLoading}>{isLogin ? 'Sing In' : 'Sing Up'}</Button>
				</form>
				<div className={'flex justify-center mb-6 gap-1 w-full h-5 mt-4'}>

					{isLogin ? <div className={'flex'}>
						<p className={'mr-[11px]'}>Not a member?</p>
						<button type={'button'}
										className={'flex text-md font-bold text-primary'}
										onClick={() => setIsLogin(false)}><Image src={link} alt={link} width={16} height={16} className={'mr-3 my-1'}/> Sing Up now
						</button>
					</div> : <div className={'block w-full h-8'}>
						<div className="w-[412px] text-light text-sm font-medium">
							<span className=" leading-none">By signing up I agree that I am 18 years of age or older, to the </span>
							<span className="text-primary leading-none">User Agreement</span>
							<span className=" leading-none">, </span>
							<span className="text-primary leading-none">Privacy Policy</span>
							<span className="  leading-none">, </span>
							<span className="text-primary  leading-none">Cookie Policy</span>
							<span className="  leading-none">, and </span>
							<span className="text-primary  leading-none">E-Sign Consent</span>
							<span className="  leading-none">.</span>
						</div>
						<button type={'button'}
										className={'text-primary'}
										onClick={() => setIsLogin(true)}>Sing In
						</button>
					</div>
					}
				</div>
			</div>
		</div>
	)
}