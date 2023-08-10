import React from 'react';
import NoteCard from './NoteCard';

function NotesCardsList({notesCards, updateNotesCards}) {
    const listNotesCards = notesCards.map(noteCard => <NoteCard key={noteCard.id} noteCard={noteCard} notesCards={notesCards} updateNotesCards={updateNotesCards} />);

    return (
        <div className='notes-cards-list'>
            {listNotesCards}
        </div>
    );
}

export default NotesCardsList;
