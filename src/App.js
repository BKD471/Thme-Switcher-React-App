import logo from './logo.svg';
import React,{useState} from 'react';
import ThemeContext from './context/ThemeContext'
import WindowPane from  './components/WindowPane'


const App =() => {

 const context=useState("dark")

return(
 <ThemeContext.Provider value={context}>

   <WindowPane/>

 </ThemeContext.Provider>

  );
}

export default App;
