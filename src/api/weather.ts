import axios from 'axios'
import { ForecastWeatherDataResponse } from '../types/weatherDataResponse'

type WeatherOptions = {
  location: string
}

const WEATHER_ROUTES = {
  forecast: 'forecast.json'
}

const createAxiosInstanceForWeatherAPI = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
    params: {
      key: process.env.REACT_APP_WAETHER_API_KEY,
      lang: 'sk',
      days: 1,
      aqi: 'no',
      alerts: 'no'
    }
  })
}
export const getWeather = async ({ location }: WeatherOptions) => {
  const { data } = await createAxiosInstanceForWeatherAPI().get<ForecastWeatherDataResponse>(
    WEATHER_ROUTES.forecast,
    { params: { q: location } }
  )
  return data
}
