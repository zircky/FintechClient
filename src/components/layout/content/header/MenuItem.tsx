import Image from 'next/image'

import search from '@/assets/img/Search.svg'
import notification from '@/assets/img/sidebar/Notification.svg'
import ArrowDownSquare from '@/assets/img/Arrow-DownSquare.svg'
import down from '@/assets/img/down.svg'

export function MenuItem() {
	return (
		<>
				<div className={'flex border-[3px] border-lightGrey rounded-xl w-[13.125rem] h-6'}>
					<input placeholder={'Search'} type={'text'} className={'bg-transparent'}/>
					<Image src={search} alt={'search'} width={25} height={25} className={'mr-3'}/>
				</div>
				<div className={'flex'}>
					<Image src={notification} alt={'Notification'} width={25} height={25}/>
					<div className={'flex'}>
						<Image src={ArrowDownSquare} alt={'ArrowDownSquare'} width={25} height={25}/>
						<span className={'flex'}>
							<p className={'text-lg mr-7'}>Eng/USD</p>
							<Image src={down} alt={'down'} width={12} height={12}></Image>
						</span>
						{/*<Image src={} alt={}/>*/}
					</div>
				</div>
		</>
	)
}