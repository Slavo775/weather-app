import React, { lazy, Suspense } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { useWeatherData } from './use/weatherData'
import './style/fonts.scss'
import ContentMessage from './components/ContentMessage/ContentMessage'

function App() {
  const { getWeatherData, result, isFetching } = useWeatherData()
  const WeatherContent = lazy(() => import('./components/WeatherContent/WeatherContent'))

  return (
    <div className="App">
      <header className="App-header">
        <Header getWeatherData={getWeatherData} />
      </header>
      {result && !isFetching && (
        <Suspense>
          <WeatherContent result={result} />
        </Suspense>
      )}
      {result === undefined && !isFetching && (
        <ContentMessage message={'Pre zadany vyraz sa nenasli vysledky'} />
      )}
      {result === null && !isFetching && <ContentMessage message={'Prosím zadaj lokalitu'} />}
      {isFetching && <ContentMessage message={''} />}
    </div>
  )
}

export default App
