import React from 'react';

function Color({color, noteCard, notesCards, updateNotesCards, setToggleColorPicker}) {

    const handleColorChange = (id, color) => {        
        let notesCardsCopy = notesCards.map(note => {return note});

        const index = notesCardsCopy.indexOf(notesCardsCopy.filter(x => x.id === id)[0]);

        notesCardsCopy[index].headerBgColor = color.headerBgColor;
        notesCardsCopy[index].contentBgColor = color.contentBgColor;
        
        updateNotesCards(notesCardsCopy);
        setToggleColorPicker(false);
    };

    return (
        <div className='color' onClick={() => handleColorChange(noteCard.id, color)}>
            <div className='color-square' style={{'background-color': color.contentBgColor}}></div>
            <span>{color.name}</span>
        </div>        
    );
}

export default Color;