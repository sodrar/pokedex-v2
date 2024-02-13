import { useState } from 'react'
import './noteDisplay.css'

export function NoteDisplay(props) {

    const [note, setNote] = useState({
        title: props.note.title,
        content: props.note.content
    })

    const handleChange = e => {
        setNote(e.target.value)
    }

    return <div className='note-container'>
        <h1>Ma card</h1>
        <h1 className='note-title'>{note.title}</h1>
        <textarea className='note-content' value={note.content} onChange={handleChange}></textarea>
        <button id='btn-maj'>Mettre à jour</button>
    </div>
}