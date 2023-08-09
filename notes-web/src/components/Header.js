import React from 'react';
import NotesCardsCounter from './NotesCardsCounter';

function Header({notesCards}) {
    return (
        <div>
            Header
            <NotesCardsCounter notesCards={notesCards}/>
        </div>
    );
}

export default Header;
