const watchlistController = require('../../../db/controllers/WatchlistController')
const libraryController = require('../../../db/controllers/LibraryController')

const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/movie/:id', async (req, res) => {
  const watchlist = await watchlistController.movieInWatchlist(req.params.id, req.user)
  const library = await libraryController.movieInLibrary(req.params.id, req.user)

  res.send(await tmdbWrapper.details.movie(req.params.id, watchlist, library))
})
route.get('/tv/:id', async (req, res) => {
  const watchlist = await watchlistController.tvInWatchlist(req.params.id, req.user)
  const library = await libraryController.tvInLibrary(req.params.id, req.user)
  res.send(await tmdbWrapper.details.tv(req.params.id, watchlist, library))
})

module.exports = route
