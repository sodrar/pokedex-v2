import './note.css'

export function Note(props) {
    if (props.status) {
        return <div className='note-cont'>
            <h1 className='titre-note'>{props.title}</h1>
            <span className='heart'>❤️</span>
        </div>
    } else {
        return <div className='note-cont'>
            <h1 className='titre-note'>{props.title}</h1>
            <span className='heart'>♡</span>
        </div>
    }

}