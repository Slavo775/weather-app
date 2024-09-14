import { getWeather } from '../api/weather'
import { useState } from 'react'
import { ForecastWeatherDataResponse } from '../types/weatherDataResponse'

export const useWeatherData = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [result, setResult] = useState<ForecastWeatherDataResponse | undefined | null>(null)
  const [currentLocation, setCurrentLocation] = useState('')
  const getWeatherData = async (location: string) => {
    if (currentLocation === location) return
    try {
      setIsFetching(true)
      const data = await getWeather({ location })
      setResult(data)
    } catch (e) {
      setResult(undefined)
      setIsFetching(false)
    } finally {
      setIsFetching(false)
      setCurrentLocation(location)
    }
  }

  return { getWeatherData, isFetching, result }
}
