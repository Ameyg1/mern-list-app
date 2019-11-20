import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './components/appnavbar';
import List from './components/list';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <Input/>
      <List />
    </div>
  );
}

export default App;
