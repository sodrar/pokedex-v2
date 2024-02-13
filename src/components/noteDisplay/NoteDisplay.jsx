import './noteDisplay.css'

export function NoteDisplay(props) {
    return <div className='note-container'>
        <h1>Ma card</h1>
        <h2 className='note-title'>{props.title}</h2>
        <p className='note-content'>{props.content}</p>
    </div>
}