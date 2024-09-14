import Location from '../Location/Location'
import { CurrentCondition } from '../CurrentCondition/CurrentCondition'
import HourlyForecast from '../HourlyForecast/HourlyForecast'
import { WeatherDetailWrapper } from '../weatherDetail/WeatherDetailWrapper/WeatherDetailWrapper'
import React from 'react'
import { ForecastWeatherDataResponse } from '../../types/weatherDataResponse'

export default function WeatherContent({ result }: { result: ForecastWeatherDataResponse }) {
  return (
    <div>
      <Location city={result?.location.name} country={result?.location.country ?? ''} />
      <CurrentCondition
        imgSource={result?.current.condition.icon}
        temp={result?.current.temp_c}
        currentState={result?.current.condition.text}
      />
      <HourlyForecast hours={result?.forecast.forecastday[0].hour} />
      <WeatherDetailWrapper
        precip={result?.current.precip_mm}
        wind={result?.current.wind_kph}
        humidity={result?.current.humidity}
      />
    </div>
  )
}
