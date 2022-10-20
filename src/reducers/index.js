import { combineReducers } from 'redux'

const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4.02' },
    { title: 'Macarena', duration: '2.30' },
    { title: 'All Start', duration: '3.15' },
    { title: 'I want it that way', duration: '1.45' },
  ]
}

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer,
})
