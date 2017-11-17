const GenreMovie = require('../models/GenreMovie')
const GenreTv = require('../models/GenreTv')

const getGenreMovie = async (ids) => {
  try {
    return await Promise.all(ids.map(async id => {
      try {
        let genre = await GenreMovie.findOne({id: id})
        return genre.name
      } catch (err) {
        return null
      }
    }))
  } catch (err) {
    console.error(err)
    return null
  }
}
const getGenreTv = async (ids) => {
  try {
    return await Promise.all(ids.map(async id => {
      try {
        let genre = await GenreTv.findOne({id: id})
        return genre.name
      } catch (err) {
        return null
      }
    }))
  } catch (err) {
    console.error(err)
    return null
  }
}
module.exports = {
  getGenreTv,
  getGenreMovie
}
