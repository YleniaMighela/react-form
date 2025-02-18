// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react';

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

  const [listaDvd, setlistaDvd] = useState('Titolo del dvd');


  return (
    <>

      {/* sezione l'input in cui si inserirà il titolo dell'articolo */}
      <input type="text" value={listaDvd}
        onChange={e => { setlistaDvd(e.target.value) }}
      />
      {/* <p>Il titolo è {listaDvd}</p> */}



      {/* sezione in cui vengono iterati gli elementi dell'array */}
      <ul>
        {disneyDvd.map((dvd, index) => (<li key={index}>{dvd}</li>))}
      </ul>
    </>
  )



  // )



}

export default App
