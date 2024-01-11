import logo from './logo.svg';
import './App.css';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';

let preselectedwords = ['Mountain','Sea','Sky']

function App() {
  return (
    <div>
      <Title/>
      <SearchBar/>
      <PresetSearch preselectedwords={preselectedwords}/>
      <ImageResults searchtext="Beach"/>
    </div>
  );
}

export default App;
