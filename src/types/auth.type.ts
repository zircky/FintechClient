export interface IAuthData {
	username: string,
	password: string,
}

export interface IAuthFrom extends IAuthData {
	confirmPassword?: string
}