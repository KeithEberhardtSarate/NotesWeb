import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPalette, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function NoteCardHeader({noteCard, notesCards, updateNotesCards}) {
    const handleChange = (event) => {
        const newContent = event.target.textContent;
        console.log(newContent);
    };

    const handleAddNewNote = () => {
        let notesCardsCopy = notesCards.map(note => {return note});

        notesCardsCopy.push(
            {
              id: notesCards.length + 1,
              title: '',
              headerBgColor: 'yellow',
              contentBgColor: 'Khaki',
              font: '',
              notes: ''
            }
          );
        
        updateNotesCards(notesCardsCopy);
        console.log(notesCards);
    };

    return (
        <div className='note-card-header'
             style={{'background-color': noteCard.headerBgColor}}>
            <div className='card-icon'>
                <FontAwesomeIcon icon={faPalette} />
            </div>
            <div className='card-title card-header-editable-area'
                 contentEditable='true'
                 onInput={handleChange}>{noteCard.title}</div>
            <div className='card-action-container'>
                <div className='card-icon' onClick={handleAddNewNote}> 
                    <FontAwesomeIcon icon={faPlus} />
                </div>    
                <div className='card-icon'>
                    <FontAwesomeIcon icon={faTrash} />
                </div>                   
            </div>
        </div>
    );
}

export default NoteCardHeader;
