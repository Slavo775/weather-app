import { getWeather } from '../api/weather'
import { useState } from 'react'
import { ForecastWeatherDataResponse } from '../types/weatherDataResponse'

export const useWeatherData = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [result, setResult] = useState<ForecastWeatherDataResponse | null>(null)
  const getWeatherData = async (location: string) => {
    try {
      setIsFetching(true)
      const data = await getWeather({ location })
      setResult(data)
    } catch (e) {
      setResult(null)
    } finally {
      setIsFetching(false)
    }
  }

  return { getWeatherData, isFetching, result }
}
