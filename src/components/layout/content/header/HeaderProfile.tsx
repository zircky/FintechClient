import avatar from '@/assets/img/avatar.svg'
import Image from 'next/image'

export function HeaderProfile() {
	return (
		<div>
			<Image src={avatar} alt={'avatar'} width={42} height={42} className={''}/>
		</div>
	)
}