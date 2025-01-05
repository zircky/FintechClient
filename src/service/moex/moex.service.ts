import { axiosClassic } from '@/api/api.interceptor'

export const getShares = async () => {
	try {
		const response = await axiosClassic.get("/moex/shares");
		return response.data;
	} catch (error) {
		console.error("Ошибка при получении данных с MOEX API:", error);
		throw error;
	}
};