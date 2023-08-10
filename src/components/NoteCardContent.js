import React from 'react';
import Note from './Note';

function NoteCardContent({noteCard}) {
    return (
        <div className='note-card-content'
        style={{'background-color': noteCard.contentBgColor}}>
            <Note note={noteCard.notes}/>
        </div>
    );
}

export default NoteCardContent;
