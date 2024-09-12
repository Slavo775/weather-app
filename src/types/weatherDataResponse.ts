export type ForecastWeatherDataResponse = {
    current: CurrentWeatherResponse,
    forecast: ForecastWeatherResponse,
    location: LocationWeatherResponse
}

export type CurrentWeatherResponse = {
    temp_c: number,
    condition: {
        text: string,
        icon: string
    }

}
export type ForecastWeatherResponse = {
    forecastDay: {
       hour: {
           temp_c: number,
           time: string,
           condition: {
               icon: string
           }
       }[]
    }[]
}
export type LocationWeatherResponse = {
    country: string,
    name: string
}