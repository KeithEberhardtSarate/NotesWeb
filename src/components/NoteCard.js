import React from 'react';
import NoteCardHeader from './NoteCardHeader';
import NoteCardContent from './NoteCardContent';

function NoteCard({noteCard, notesCards, updateNotesCards}) {
    return (
        <div className='note-card'>
            <NoteCardHeader noteCard={noteCard} notesCards={notesCards} updateNotesCards={updateNotesCards} />
            <NoteCardContent noteCard={noteCard} notesCards={notesCards} updateNotesCards={updateNotesCards}/>
        </div>
    );
}

export default NoteCard;
