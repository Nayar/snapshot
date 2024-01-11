import logo from './logo.svg';
import './App.css';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';
import React from 'react';

let preselectedwords = ['Mountain','Sea','Sky', 'bird',]

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "Sky"
    }
  }

  render() {
    return (
          <div>
            <Title/>
            <SearchBar/>
            <PresetSearch preselectedwords={preselectedwords}/>
            <ImageResults searchtext={this.state.searchtext}/>
          </div>
        )
  }
}

export default App;
