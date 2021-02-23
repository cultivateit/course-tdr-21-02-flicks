import fs from 'fs/promises'

const ENC = 'utf8'
const DIR = './data'
const FILE = DIR + '/movies.json'

const createDir = async () => {
  try {
    await fs.mkdir(DIR)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

const createFile = async () => {
  try {
    await fs.writeFile(FILE, JSON.stringify([]), ENC)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await createDir(DIR)
    await fs.writeFile(FILE, JSON.stringify([]), ENC)
  }
}

const readMoviesFromFile = async () => {
  try {
    const content = await fs.readFile(FILE, ENC)
    return JSON.parse(content)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await createFile()
    return []
  }
}

const writeMoviesToFile = async movies => {
  try {
    await fs.writeFile(FILE, JSON.stringify(movies), ENC)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await createDir()
    await fs.writeFile(FILE, JSON.stringify(movies), ENC)
  }
}

export const readMovies = readMoviesFromFile

export const removeMovies = async () => {
  await writeMoviesToFile([])
}

export const readMovie = async movieId => {
  const movies = await readMoviesFromFile()
  return movies.find(movie => movie.movieId === movieId)
}

export const upsertMovie = async newMovie => {
  const movies = await readMoviesFromFile()
  const index = movies.findIndex(movie => movie.movieId === newMovie.movieId)
  if (index === -1) await writeMoviesToFile([ ...movies, newMovie ])
  else await writeMoviesToFile(movies.map(movie => movie.movieId === newMovie.movieId ? newMovie : movie))
}

export const removeMovie = async movieId => {
  const movies = await readMoviesFromFile()
  await writeMoviesToFile(movies.filter(movie => movie.movieId !== movieId))
}
