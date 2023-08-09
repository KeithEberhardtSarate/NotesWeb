import React from 'react';
import NoteCard from './NoteCard';

function NotesCardsList({notesCards}) {
    const listNotesCards = notesCards.map(noteCard => <NoteCard noteCard={noteCard}/>);

    return (
        <div>
            {listNotesCards}
        </div>
    );
}

export default NotesCardsList;
