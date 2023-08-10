import React from 'react';

function NotesCardsListEmpty({notesCards, updateNotesCards}) {

    const handleAddNewNote = () => {
        console.log(notesCards);
        let notesCardsCopy = notesCards.map(note => {return note});

        notesCardsCopy.push(
            {
              id: 1,
              title: '',
              headerBgColor: 'yellow',
              contentBgColor: 'Khaki',
              font: '',
              notes: ''
            }
          );
        
        updateNotesCards(notesCardsCopy);
    };

    return (
        <div className='notes-cards-list-empty'>
            <p>You don't have any notes registered yet. create your first!</p>
            <button onClick={handleAddNewNote}>New note</button>
        </div>
    );
}

export default NotesCardsListEmpty;