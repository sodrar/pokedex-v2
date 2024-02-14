import { useState } from 'react'
import { NoteDisplay } from './components/noteDisplay/NoteDisplay'
import './App.css'
import { ListeNotes } from './components/listeNotes/ListeNotes'


function App() {

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "note1",
      content: "IUHIHFCPOISDFPOJSDOJFOSDIJFOPISDJFJOISDJFOISDJFOSJIDFJSOJIDF",
      status: false
    },
    {
      id: 1,
      title: "note2",
      content: "IUHIHFCPOISDFPOJSDOJFOSDIJFOPISDJFJOISDJFOISDJFOSJIDFJSOJIDF",
      status: false
    },
    {
      id: 1,
      title: "note3",
      content: "IUHIHFCPOISDFPOJSDOJFOSDIJFOPISDJFJOISDJFOISDJFOSJIDFJSOJIDF",
      status: false
    },
    {
      id: 1,
      title: "note4",
      content: "IUHIHFCPOISDFPOJSDOJFOSDIJFOPISDJFJOISDJFOISDJFOSJIDFJSOJIDF",
      status: true
    }
  ])

  const setLike = (status,id) => {
    console.log(status)
  }

  return <>
    <h1>Application CLON2 de notes, par Sofian BOUDRAA</h1>
    <div className='home-container' >
      <ListeNotes setLike={setLike} liste={noteList} />
      <NoteDisplay note={noteList[1]} />
    </div>
  </>
}

export default App
