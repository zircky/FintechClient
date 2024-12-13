import ActiveHome from '@/assets/img/sidebar/ActiveHome.svg'
import Home from '@/assets/img/sidebar/Home.svg'
import ActiveExchange from '@/assets/img/sidebar/ActiveExchange.svg'
import Exchange from '@/assets/img/sidebar/Exchange.svg'
import ActivePrices from '@/assets/img/sidebar/ActivePrices.svg'
import Prices from '@/assets/img/sidebar/Prices.svg'
import ActiveWallet from '@/assets/img/sidebar/ActiveWallet.svg'
import Wallet from '@/assets/img/sidebar/Wallet.svg'
import ActivePromotions from '@/assets/img/sidebar/ActivePromotions.svg'
import Promotions from '@/assets/img/sidebar/Promotions.svg'
import ActiveActivities from '@/assets/img/sidebar/ActiveActivities.svg'
import Activities from '@/assets/img/sidebar/Activities.svg'
import ActiveNotification from '@/assets/img/sidebar/ActiveNotification.svg'
import Notification from '@/assets/img/sidebar/Notification.svg'
import ActiveSetting from '@/assets/img/sidebar/ActiveSetting.svg'
import Setting from '@/assets/img/sidebar/Setting.svg'
import type { ISidebarType } from '@/components/layout/sidebar/sidebar.type'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export const SidebarData: ISidebarType[] = [
	{
		label: 'Home',
		ruLabel: 'Главная страница',
		icon: Home,
		active:ActiveHome,
		href: PUBLIC_PAGE.HOME
	},
	{
		label: 'Exchange',
		ruLabel: 'Обмен',
		icon: Exchange,
		active: ActiveExchange,
    href: PUBLIC_PAGE.EXCHANGE
	},
	{
		label: 'Prices',
		ruLabel: 'Цены',
		icon: Prices,
		active: ActivePrices,
    href: PUBLIC_PAGE.PRICES
	},
	{
		label: 'Wallets',
		ruLabel: 'Кошельки',
		icon: Wallet,
		active: ActiveWallet,
		href: PUBLIC_PAGE.WALLET
	},
	{
		label: 'Promotions',
		ruLabel: 'Акции',
		icon: Promotions,
		active: ActivePromotions,
		href: PUBLIC_PAGE.PROMOTIONS
	},
	{
		label: 'Activities',
		ruLabel: 'Деятельность',
		icon: Activities,
		active: ActiveActivities,
		href: PUBLIC_PAGE.ACTIVITIES
	},
	{
		label: 'Notifications',
		ruLabel: 'Уведомления',
		icon: Notification,
		active: ActiveNotification,
		href: PUBLIC_PAGE.NOTIFICATION
	},
	{
		label: 'Settings',
		ruLabel: 'Настройки',
		icon: Setting,
		active: ActiveSetting,
		href: PUBLIC_PAGE.SETTING
	}
]