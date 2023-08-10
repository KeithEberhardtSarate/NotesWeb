import './App.css';
import Header from './components/Header';
import NotesCardsList from './components/NotesCardsList';

const COLORS = [{'Blue':''}, {'Green':''}, {'Yellow':''}];

// Just for the static version
const NOTES_CARDS = [
  {
    id:'1',
    title: 'Test',
    bgColor: '',
    font: '',
    notes: [
      {
        id:1,
        content: 'Some notes here'
      },
      {
        id:2,
        content: 'Any other notes here'
      }
    ]
  },
  {
    id:'2',
    title: 'Test2',
    bgColor: '',
    font: '',
    notes: [
      {
        id:1,
        content: 'Other note'
      },
      {
        id:2,
        content: 'Yeah, it is a note'
      }
    ]
  }
];

function App() {
  return (
    <div className='App'>
      <Header notesCards={NOTES_CARDS}/>
      <NotesCardsList notesCards={NOTES_CARDS}/>
    </div>
  );
}

export default App;
