import React from 'react';
import NoteCardHeader from './NoteCardHeader';
import NoteCardContent from './NoteCardContent';

function NoteCard({noteCard}) {
    return (
        <div>
            <NoteCardHeader />
            <NoteCardContent notes={noteCard.notes}/>
        </div>
    );
}

export default NoteCard;
