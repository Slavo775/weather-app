import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {useWeatherData} from "./use/weatherData";
import {SearchForm} from "./components/SearchForm/SearchForm";
import Location from "./components/Location/Location";

function App() {

    const {getWeatherData, result, isFetching} = useWeatherData()

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchForm getWeatherData={getWeatherData} />
      </header>
        <Location city={result?.location.name ?? ''} country={result?.location.country ?? ''} />
        <div>{JSON.stringify(result ?? {})}</div>
    </div>
  );
}

export default App;
