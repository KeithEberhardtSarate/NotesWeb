import React from 'react';
import Color from './Color';

function ColorPicker({noteCard, notesCards, updateNotesCards, setToggleColorPicker}) {
    const COLORS = [
        {
            headerBgColor: 'yellow',
            contentBgColor: 'Khaki',
            name:'Yellow'
        },
        {
            headerBgColor: '#1E90FF',
            contentBgColor: '#00BFFF',
            name:'Blue'
        },
        {
            headerBgColor: '#00FF00',
            contentBgColor: '#7CFC00',
            name:'Green'
        },
        {
            headerBgColor: '#FF1493',
            contentBgColor: '#FF69B4',
            name:'Pink'
        }
    ];
    const listColors = COLORS.map(color => <Color color={color} noteCard={noteCard} notesCards={notesCards} updateNotesCards={updateNotesCards} setToggleColorPicker={setToggleColorPicker}/>);
    return (
        <div className='color-picker'>
            {listColors}
        </div>
    );
}

export default ColorPicker;
