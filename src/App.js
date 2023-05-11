import React from 'react'
import './App.css'
import Mdata from './components/Info'
import Card from './components/card'

const App = (val) => {
   return(
    <>   
    <div id='nav'> Top {Mdata.length} Netflix Webseries </div> 
    {Mdata.map(Card)};
  
 
</>


); 
}

export default App
