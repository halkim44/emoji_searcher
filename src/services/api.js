const getEmoji = (name) => {
  return fetch(`https://emoji-api.com/emojis?search=${name}`, {
      mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
}
const getAllEmojis = (str) => {
  if (str === undefined) {
    return fetch(`https://emoji-api.com/emojis`, {
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
  }
  return getEmoji(str)
}

export default getAllEmojis
