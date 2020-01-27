import React from 'react';

class SearchBox extends React.Component {
  
  componentDidMount() {
    const searchInput = document.querySelector('.j-typing-event');
    searchInput.addEventListener('keyup', (e) => {
      this.props.searchEmoji(e.target.value);
      console.log(e.target.value);
    })
  }
  render() {
    return (
      <div className="search-box">
        <input type="text" placeholder="search.." className="j-typing-event"/>
      </div>
    )
  }
}

export default SearchBox
