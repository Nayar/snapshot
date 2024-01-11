import logo from './logo.svg';
import './App.css';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';
import React from 'react';

let preselectedwords = ['Mountain','Sea','Sky', 'bird',];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "Sky"
    };
  }

  handleChangeSearch = (text) => {
    this.setState({ searchtext: text });
  };

  changetobeach = (event) => {
    let text = event.target.outerText;
    this.setState({ searchtext: text });
  };

  render() {
    return (
      <div>
        <Title />
        <SearchBar onSearch={this.handleChangeSearch} />
        <PresetSearch preselectedwords={preselectedwords} onclick={this.changetobeach} />
        <ImageResults searchtext={this.state.searchtext} />
      </div>
    );
  }
}

export default App;

