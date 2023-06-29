const dayjs = require('dayjs')
const inspect = require('util').inspect

const { WIP } = require('../_data/series.js')

const formatDate = (date, format) => dayjs(date).format(format)

const readableDate = (date, format = 'MMMM D, YYYY') => formatDate(date, format)

const htmlDateString = date => formatDate(date, 'YYYY-MM-DD')

// Get the first `n` elements of a collection.
const head = (array, n) => {
  if (!Array.isArray(array) || array.length === 0) {
    return []
  }
  if (n < 0) {
    return array.slice(n)
  }

  return array.slice(0, n)
}

// Return the smallest number argument
const min = (...numbers) => Math.min.apply(null, numbers)

// Return all the tags used in a collection
const getAllTags = collection => {
  let tagSet = new Set()
  for (let item of collection) {
    ;(item.data.tags || []).forEach(tag => tagSet.add(tag))
  }
  return Array.from(tagSet)
}

const filterTagList = tags =>
  (tags || []).filter(
    tag => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
  )

const getByURL = (collection, url) =>
  (collection || []).find(item => item.page.url === url)

const getByFileSlug = (collection, fileSlug) =>
  (collection || []).find(item => item.page.fileSlug === fileSlug)

const readTime = function computeReadTime(wordcount) {
  const averageWordPerMinuteSpeed = 250
  return Math.max(Math.round(wordcount / averageWordPerMinuteSpeed), 1)
}

const debug = content => `<pre>${inspect(content)}</pre>`

const obfuscateEmail = email =>
  email
    .replace('.', '&nbsp;<small>dot</small>&nbsp;')
    .replace('@', '&nbsp;<small>at</small>&nbsp;')

const getIndex = (array, value) => array.indexOf(value)

const getSeriesData = (seriesList, seriesName, currentPost) => {
  const series = seriesList[seriesName]
  if (!series) {
    return { posts: [] }
  }
  const index = getIndex(series.posts, currentPost)
  return {
    ...series,
    index: index + 1,
    total: series.posts.length,
  }
}

const getPrevious = (series, fileSlug) => {
  const index = getIndex(series, fileSlug)
  return index - 1 < 0 ? null : series[index - 1]
}

const getNext = (array, fileSlug) => {
  const index = getIndex(array, fileSlug)
  return index === array.length - 1 < 0 ? null : array[index + 1]
}

const getPrevInSeries = (series, fileSlug, posts) => {
  const prevSlug = getPrevious(series, fileSlug)
  return prevSlug ? getByFileSlug(posts, prevSlug) : null
}

const getNextInSeries = (series, fileSlug, posts) => {
  const nextSlug = getNext(series, fileSlug)
  if (!nextSlug) {
    return null
  }
  return nextSlug === 'WIP' ? WIP : getByFileSlug(posts, nextSlug)
}

module.exports = {
  formatDate,
  readableDate,
  htmlDateString,
  head,
  min,
  getAllTags,
  filterTagList,
  getByURL,
  getByFileSlug,
  readTime,
  debug,
  obfuscateEmail,
  getIndex,
  getPrevious,
  getNext,
  getPrevInSeries,
  getNextInSeries,
  getSeriesData,
}
