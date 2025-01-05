import type { IAuthData } from '@/types/auth.type'
import Cookies from 'js-cookie'
import type { IUser } from '@/types/user.type'
import { axiosClassic } from '@/api/api.interceptor'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'access_token',
	'REFRESH_TOKEN' = 'refresh_token'
}

interface IAuthResponse {
	user: IUser,
	access_token: string
}

class AuthService {
	private _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData) {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data)

		if (response.data.access_token) {
			this._seveTokenStorage(response.data.access_token)
		}
		return response
	}

	async getNewTokens() {
		const response  = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.access_token) {
			this._seveTokenStorage(response.data.access_token)
		}
		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response  = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				}
			})

    return response.data
	}

	async logout(){
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
      this._removeTokenStorage()
    }

		return response
	}

	private _seveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1
		})
	}

	private _removeTokenStorage() {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)

  }
}

export const authService = new AuthService()