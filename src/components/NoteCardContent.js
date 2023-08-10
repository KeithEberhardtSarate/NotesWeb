import React from 'react';

function NoteCardContent({noteCard}) {
    const handleChange = (event) => {
        const newContent = event.target.textContent;
        console.log(newContent);
    };

    return (
        <div className='note-card-content' style={{'background-color': noteCard.contentBgColor}}>
            <div className="card-content-editable-area"
                 contentEditable="true"
                 onInput={handleChange}>
                {noteCard.notes}
            </div>
        </div>
    );
}

export default NoteCardContent;
