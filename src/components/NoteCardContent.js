import React from 'react';
import Note from './Note';

function NoteCardContent({notes}) {
    const listNotes = notes.map(note => <Note note={note.content}/>);

    return (
        <div>
            {listNotes}
        </div>
    );
}

export default NoteCardContent;
