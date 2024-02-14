import './note.css'

export function Note(props) {

    const handleLike = () => {
        props.passLike(true)
    }

    const handleDisLike = () => {
        props.passLike(false)
    }

    if (props.status) {
        return <div className='note-cont'>
            <h1 className='titre-note'>{props.title}</h1>
            <span className='heart' onClick={handleDisLike} >❤️</span>
        </div>
    } else {
        return <div className='note-cont'>
            <h1 className='titre-note'>{props.title}</h1>
            <span className='heart' onClick={handleLike} >♡</span>
        </div>
    }

}