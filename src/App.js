import './App.css';
import Header from './components/Header';
import NotesCardsList from './components/NotesCardsList';

const COLORS = [{'Blue':''}, {'Green':''}, {'Yellow':''}];

// Just for the static version
const NOTES_CARDS = [
  {
    id:'1',
    title: 'Title 1',
    headerBgColor: 'yellow',
    contentBgColor: 'Khaki',
    font: '',
    notes: '- Some notes here'
  },
  {
    id:'2',
    title: 'Title 2',
    headerBgColor: 'yellow',
    contentBgColor: 'Khaki',
    font: '',
    notes: '- Some notes here'
  },
  {
    id:'3',
    title: 'Title 3',
    headerBgColor: 'yellow',
    contentBgColor: 'Khaki',
    font: '',
    notes: '- Some notes here'
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
