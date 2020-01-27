import React from 'react';
import ReactDOM from "react-dom";

const EmojiListItem = props => {
  return (
    <div className="emoji-list-item col-xs-4 col-md-2 col-lg-1">
      <div className="emoji-char-wrapper">
        <span className="emoji-char">{props.char}</span>
      </div>
      <span className="emoji-name">{props.slug.replace(/\-/g," ")}</span>
    </div>
  )
}

export default EmojiListItem
