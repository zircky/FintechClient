import Image from 'next/image'
import search from '@/assets/img/Search.svg'

interface Props {

}

export function SearchField( {}: Props) {
	return (
		<div className={'flex w-[13.125rem] h-6'}>
			<input placeholder={'Search'} type={'text'} className={'py-2 px-3 bg-transparent outline-none border-none shadow-none'} />
			<Image src={search} alt={'search'} width={25} height={25} className={'mr-3'} />
		</div>
	)
}