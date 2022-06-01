
import './App.css';

import { Header } from './components/Header/Header';
import { TasksList } from './components/TaskList/TasksList';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App =()=> {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <TasksList></TasksList>
    </div>
    </BrowserRouter>
  );
}

export default App;
