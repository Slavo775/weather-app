export type ForecastWeatherDataResponse = {
  current: CurrentWeatherResponse
  forecast: ForecastWeatherResponse
  location: LocationWeatherResponse
}

export type CurrentWeatherResponse = {
  temp_c: number
  precip_mm: number
  wind_kph: number
  humidity: number
  condition: {
    text: string
    icon: string
  }
}

export type ForecastWeatherResponse = {
  forecastday: {
    hour: ForecastWeatherHourResponse[]
  }[]
}

export type ForecastWeatherHourResponse = {
  temp_c: number
  time: string
  condition: {
    icon: string
    text: string
  }
}

export type LocationWeatherResponse = {
  country: string
  name: string
}
