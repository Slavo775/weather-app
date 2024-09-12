import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Input from "./components/shared/Input/Input";

function App() {
  const [term, setTerm] = useState('Bratislava')

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Input value={term} setValue={setTerm} />
      </header>
    </div>
  );
}

export default App;
