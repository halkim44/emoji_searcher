import React from 'react';
import ReactDOM from "react-dom";
import './main.scss';
import EmojiListContainer from './components/EmojiListContainer';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchFor: '' };
    this.searchEmoji = this.searchEmoji.bind(this);
  }
  componentDidMount() {
    console.log(this);
  }
  searchEmoji = str => {
    this.setState({
      searchFor: str
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Emoji Searcher</h1>
        </header>
        <SearchBox searchEmoji={this.searchEmoji} />
        <EmojiListContainer searchFor={this.state.searchFor} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

