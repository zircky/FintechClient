import axios from 'axios'
import { getContentType } from '@/api/api.helper'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)

