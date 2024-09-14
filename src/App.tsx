import React, { lazy, Suspense, useMemo } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import './style/fonts.scss'
import ContentMessage from './components/ContentMessage/ContentMessage'
import { useWeatherData } from './use/weatherData'

function App() {
  const { result, isFetching, emptyResult } = useWeatherData()
  const WeatherContent = lazy(() => import('./components/WeatherContent/WeatherContent'))

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {result && !isFetching && (
        <Suspense>
          <WeatherContent result={result} />
        </Suspense>
      )}
      {emptyResult && !isFetching && (
        <ContentMessage message={'Pre zadany vyraz sa nenasli vysledky'} />
      )}
      {!result && !isFetching && !emptyResult && (
        <ContentMessage message={'Prosím zadaj lokalitu'} />
      )}
      {isFetching && <ContentMessage message={'Načítavam...'} />}
    </div>
  )
}

export default App
