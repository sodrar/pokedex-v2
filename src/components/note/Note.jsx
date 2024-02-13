import './note.css'

export function Note(props) {
    return <div className='note-cont'>
        <h1 className='titre-note'>{props.title}</h1>
    </div>
}