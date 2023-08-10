import React from 'react';

function NoteCardHeader({noteCard}) {
    return (
        <div className='note-card-header'
        style={{'background-color': noteCard.headerBgColor}}>
            {noteCard.title}
        </div>
    );
}

export default NoteCardHeader;
