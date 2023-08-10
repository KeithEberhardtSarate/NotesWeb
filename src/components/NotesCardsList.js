import React from 'react';
import NoteCard from './NoteCard';

function NotesCardsList({notesCards}) {
    const listNotesCards = notesCards.map(noteCard => <NoteCard noteCard={noteCard}/>);

    return (
        <div className='notes-cards-list'>
            {listNotesCards}
        </div>
    );
}

export default NotesCardsList;
