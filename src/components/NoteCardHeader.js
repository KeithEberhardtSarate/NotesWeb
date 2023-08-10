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
              id: notesCardsCopy[notesCardsCopy.length - 1].id + 1,
              title: '',
              headerBgColor: 'yellow',
              contentBgColor: 'Khaki',
              font: '',
              notes: ''
            }
          );
        
        updateNotesCards(notesCardsCopy);
    };

    const handleDeleteNote = id => {        
        let notesCardsCopy = notesCards.map(note => {return note});

        const index = notesCardsCopy.indexOf(notesCardsCopy.filter(x => x.id === id)[0]);

        notesCardsCopy.splice(index, 1);
        
        updateNotesCards(notesCardsCopy);
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
                <div className='card-icon' onClick={() => handleDeleteNote(noteCard.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>                   
            </div>
        </div>
    );
}

export default NoteCardHeader;
