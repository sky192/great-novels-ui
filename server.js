const express = require('express')
const path = require('path')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/novels')

const app = express()

app.get('/api/authors', getAllAuthors)
app.get('/api/authors/:identifier', getAuthorByIdOrName)

app.get('/api/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/api/novels', getAllNovels)
app.get('/api/novels/:identifier', getNovelByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
