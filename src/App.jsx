import { useState } from 'react'
import { NoteDisplay } from './components/noteDisplay/NoteDisplay'
import './App.css'


function App() {
  return <>
    <h1>Application CLON2 de notes, par Sofian BOUDRAA</h1>
    <div className='home-container' >
      <NoteDisplay title="Test titre" content="ouhdsfhusdpofdspf" />
    </div>
  </>
}

export default App
