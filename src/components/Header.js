import React from 'react';
import NotesCardsCounter from './NotesCardsCounter';

function Header({notesCards}) {
    return (
        <div className='header'>
            <span>Notes</span>
            <NotesCardsCounter notesCards={notesCards}/>
        </div>
    );
}

export default Header;
