
import './App.css';

import { Header } from './components/Header/Header';
import { TasksList } from './components/TaskList/TasksList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About/About';
import { useState } from 'react';
const App =()=> {
  const [showAdd,setShowAdd] = useState(false)
  return (
    <BrowserRouter>
    <div className="App">
      <Header
      showAdd={()=>setShowAdd(!showAdd)}
      onAdd={showAdd}
      ></Header>
    
    <Routes>
      <Route path='/' element={<TasksList/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
