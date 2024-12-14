import notification from '@/assets/img/sidebar/Notification.svg'
import Image from 'next/image'
import ArrowDownSquare from '@/assets/img/Arrow-DownSquare.svg'
import down from '@/assets/img/down.svg'

export function HeaderLinks() {
	return (
		<div className={'flex'}>
			<Image src={notification} alt={'Notification'} width={25} height={25} className={'mr-8'} />
			<Image src={ArrowDownSquare} alt={'ArrowDownSquare'} width={25} height={25} className={'mr-[1.375rem]'} />
			<span className={'flex items-center'}>
							<p className={'text-lg mr-7'}>Eng/USD</p>
							<Image src={down} alt={'down'} width={12} height={12} />
			</span>
		</div>
	)
}