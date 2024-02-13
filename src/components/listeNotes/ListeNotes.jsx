import './listeNotes.css'
import { AddNotes } from '../addNotes/AddNotes'
import { Note } from '../note/Note'

export function ListeNotes(props) {

/*     const liste = props.liste.map(note => {
        return <Note title={note.title} />
    }) */


    return <div className='list-container'>
        <AddNotes />
        {props.liste.map((note,index) => {
            return <Note key={index} title={note.title} />
        })}
    </div>
}