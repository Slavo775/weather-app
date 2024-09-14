import { getWeather } from '../api/weather'
import { useState } from 'react'
import { ForecastWeatherDataResponse } from '../types/weatherDataResponse'
import { useDispatch, useSelector } from 'react-redux'
import {
  setWeatherData as setWeatherDataAction,
  setIsFetching as setIsFetchingAction,
  setEmptyResult as setEmptyResultAction,
  RootState,
  emptyResultSlice
} from '../store/weatherData'

export const useWeatherData = () => {
  const dispatch = useDispatch()
  const [currentLocation, setCurrentLocation] = useState('')
  const setWeatherData = (data: ForecastWeatherDataResponse | null) => {
    dispatch(setWeatherDataAction(data))
  }

  const setEmptyResult = (emptyResult: boolean) => {
    dispatch(setEmptyResultAction(emptyResult))
  }
  const setIsFetchingData = (isFetching: boolean) => {
    dispatch(setIsFetchingAction(isFetching))
  }
  const getWeatherData = async (location: string) => {
    if (currentLocation === location) return
    try {
      setIsFetchingData(true)
      const data = await getWeather({ location })
      setEmptyResult(false)
      setWeatherData(data)
    } catch (e) {
      setEmptyResult(true)
      setWeatherData(null)
    } finally {
      setIsFetchingData(false)
      setCurrentLocation(location)
    }
  }

  const result = useSelector((state: RootState) => state.weatherData)
  const isFetching = useSelector((state: RootState) => state.isFetching)
  const emptyResult = useSelector((state: RootState) => state.emptyResult)

  return { getWeatherData, result, isFetching, emptyResult }
}
