import { useState } from 'react'
import { NoteDisplay } from './components/noteDisplay/NoteDisplay'
import './App.css'
import { ListeNotes } from './components/listeNotes/ListeNotes'


function App() {

  const [noteList, setNoteList] = useState([])

  return <>
    <h1>Application CLON2 de notes, par Sofian BOUDRAA</h1>
    <div className='home-container' >
      <ListeNotes liste={noteList} />
      <NoteDisplay title="Test titre" content="ouhdsfhusdpofdspf" />
    </div>
  </>
}

export default App
