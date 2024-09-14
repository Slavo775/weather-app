import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ForecastWeatherDataResponse } from '../types/weatherDataResponse'

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: null as ForecastWeatherDataResponse | null,
  reducers: {
    setWeatherData(state, action: PayloadAction<ForecastWeatherDataResponse | null>) {
      return (state = action.payload)
    }
  }
})

export const isFetchingSlice = createSlice({
  name: 'isFetching',
  initialState: false,
  reducers: {
    setIsFetching(state, action: PayloadAction<boolean>) {
      return (state = action.payload)
    }
  }
})

export const emptyResultSlice = createSlice({
  name: 'emptyResult',
  initialState: false,
  reducers: {
    setEmptyResult(state, action: PayloadAction<boolean>) {
      return (state = action.payload)
    }
  }
})

const store = configureStore({
  reducer: {
    weatherData: weatherDataSlice.reducer,
    isFetching: isFetchingSlice.reducer,
    emptyResult: emptyResultSlice.reducer
  }
})

export { store }
export const { setWeatherData } = weatherDataSlice.actions
export const { setIsFetching } = isFetchingSlice.actions

export const { setEmptyResult } = emptyResultSlice.actions

export type RootState = ReturnType<typeof store.getState>
