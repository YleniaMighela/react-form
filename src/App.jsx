// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


const disneyDvd = [

  "Il Re Leone(1994)",
  "La Bella e la Bestia(1991)",
  "Aladdin(1992)",
  "Biancaneve e i sette nani(1937)",
  "Cenerentola(1950)",
  "La Sirenetta(1989)",
  "Hercules(1997)",
  "Mulan(1998)",
  "Frozen - Il regno di ghiaccio(2013)",
  "Rapunzel - L'intreccio della torre (2010)"
];


function App() {

  return (
    <>

      <ul>
        {disneyDvd.map((dvd) => (<li>{dvd}</li>))}
      </ul>



    </>






  )



}

export default App
