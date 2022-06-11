import logo from './logo.svg';
import './App.css';
import { Button } from "@mui/material";
import { useEffect } from 'react';


function App() {
  document.title= "React Material UI - Home";
useEffect(() => {

}, []);

  return (
    <div className="App">
      <Button>test</Button>

    </div>
  );
}

export default App;
