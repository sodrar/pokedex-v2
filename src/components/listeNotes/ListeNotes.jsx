import './listeNotes.css'
import { AddNotes } from '../addNotes/AddNotes'
import { Note } from '../note/Note'

export function ListeNotes(props) {

/*     const liste = props.liste.map(note => {
        return <Note title={note.title} />
    }) */

    const passLike = (status,id) => {
        props.setLike(status,id)
    }

    return <div className='list-container'>
        <AddNotes />
        {props.liste.map((note,index) => {
            return <Note passLike={passLike} key={index} status={note.status} title={note.title} />
        })}
    </div>
}