import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Input from "./components/shared/Input/Input";
import {useWeatherData} from "./use/weatherData";
import {SearchForm} from "./components/SearchForm/SearchForm";

function App() {

    const {getWeatherData, result, isFetching} = useWeatherData()

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchForm getWeatherData={getWeatherData} />
          <div>{JSON.stringify(result ?? {})}</div>
      </header>
    </div>
  );
}

export default App;
