import React from 'react';
import NoteCardHeader from './NoteCardHeader';
import NoteCardContent from './NoteCardContent';

function NoteCard({noteCard}) {
    return (
        <div className='note-card'>
            <NoteCardHeader noteCard={noteCard}/>
            <NoteCardContent noteCard={noteCard}/>
        </div>
    );
}

export default NoteCard;
