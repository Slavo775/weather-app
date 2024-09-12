import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {useWeatherData} from "./use/weatherData";
import {SearchForm} from "./components/SearchForm/SearchForm";
import Location from "./components/Location/Location";
import {CurrentCondition} from "./components/CurrentCondition/CurrentCondition";
import './style/fonts.scss'

function App() {

    const {getWeatherData, result, isFetching} = useWeatherData()

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchForm getWeatherData={getWeatherData} />
      </header>
        <Location city={result?.location.name ?? ''} country={result?.location.country ?? ''} />
        <CurrentCondition imgSource={result?.current.condition.icon ?? ''} temp={result?.current.temp_c ?? 0} currentState={result?.current.condition.text ?? ''} />
    </div>
  );
}

export default App;
