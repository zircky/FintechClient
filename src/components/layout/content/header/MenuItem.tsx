import Image from 'next/image'

import search from '@/assets/img/Search.svg'
import notification from '@/assets/img/sidebar/Notification.svg'
import ArrowDownSquare from '@/assets/img/Arrow-DownSquare.svg'
import down from '@/assets/img/down.svg'
import avatar from '@/assets/img/avatar.svg'

export function MenuItem() {
	return (
		<>
				<div className={'flex w-[13.125rem] h-6'}>
					<input placeholder={'Search'} type={'text'} className={'bg-transparent'}/>
					<Image src={search} alt={'search'} width={25} height={25} className={'mr-3'}/>
				</div>
				<div className={'flex w-[18.625rem]'}>
					<Image src={notification} alt={'Notification'} width={25} height={25} className={'mr-10'}/>
					<div className={'flex'}>
						<Image src={ArrowDownSquare} alt={'ArrowDownSquare'} width={25} height={25} className={'mr-[1.375rem]'}/>
						<span className={'flex items-center'}>
							<p className={'text-lg mr-7'}>Eng/USD</p>
							<Image src={down} alt={'down'} width={12} height={12} />
						</span>

						<Image src={avatar} alt={'avatar'} width={48} height={48} className={'ml-[2.3125rem]'}/>
					</div>
				</div>
		</>
	)
}