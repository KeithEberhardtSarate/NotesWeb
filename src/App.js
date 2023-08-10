import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotesCardsList from './components/NotesCardsList';
import NotesCardsListEmpty from './components/NotesCardsListEmpty';

function App() {
  // Just for the static version
  const NOTES_CARDS = [
    {
      id: 1,
      title: 'Title 1',
      headerBgColor: 'yellow',
      contentBgColor: 'Khaki',
      font: '',
      notes: '- Some notes here'
    },
    {
      id: 2,
      title: 'Title 2',
      headerBgColor: 'yellow',
      contentBgColor: 'Khaki',
      font: '',
      notes: '- Some notes here'
    },
    {
      id: 3,
      title: 'Title 3',
      headerBgColor: 'yellow',
      contentBgColor: 'Khaki',
      font: '',
      notes: '- Some notes here'
    }
  ];

  const [notesCards, setNotesCards] = useState(NOTES_CARDS);

  const updateNotesCards = (updatedNotesCards) => {
    setNotesCards(updatedNotesCards);
  }

  return (
    <div className='App'>
      <Header notesCards={notesCards}/>
      {notesCards.length ? <NotesCardsList notesCards={notesCards} updateNotesCards={updateNotesCards}/> : <NotesCardsListEmpty notesCards={notesCards} updateNotesCards={updateNotesCards} />}      
    </div>
  );
}

export default App;
