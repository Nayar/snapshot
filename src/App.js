import logo from './logo.svg';
import './App.css';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';

function App() {
  return (
    <div>
      <Title/>
      <SearchBar/>
      <PresetSearch/>
      <ImageResults searchtext="Beach"/>
    </div>
  );
}

export default App;
