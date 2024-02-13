import './listeNotes.css'
import { AddNotes } from '../addNotes/AddNotes'
import { Note } from '../note/Note'



export function ListeNotes() {
    return <div className='list-container'>
        <AddNotes />
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </div>
}