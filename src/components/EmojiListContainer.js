import React from 'react';
import ReactDOM from "react-dom";
import getAllEmojis from '../services/api';
import EmojiListItem from './EmojiListItem';
import storedEmojiData from '../services/localStorage';

class EmojiListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emojis: [], isFinishFetching: storedEmojiData.length !== 0 };
  }
  getData() {
    this.setState({
      emojis: storedEmojiData
    })
    if(!this.state.isFinishFetching){
      getAllEmojis().then(response => {
        localStorage.setItem('emojis', JSON.stringify(response));
        this.setState({
          emojis: response,
          isFinishFetching: true
        });
      })
    }
  }
  componentDidMount() {
    this.getData();
  }
  filterData() {
    if(this.props.searchFor.length > 0) {
      let dashedStr = this.props.searchFor.replace(' ', '-');
      let data = storedEmojiData.filter(obj => obj.slug.includes(dashedStr));
      this.setState({
        emojis: data
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searchFor !== this.props.searchFor) {
      this.filterData();
    }
  }
  render() {
    let list = <div></div>;
    if (this.state.emojis.length > 0) {
      list = this.state.emojis.map((emoji, i) => {
        return <EmojiListItem char={emoji['character']} slug={emoji['slug']} key={i} />
      })
    }
    return (
      <div className="container-fluid emoji-list-wrapper">
        <div className="row">
          {list}
        </div>
      </div>
    );
  }
}

export default EmojiListContainer
