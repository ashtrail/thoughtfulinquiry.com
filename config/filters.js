const dayjs = require('dayjs')
const inspect = require('util').inspect

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

const readTime = function computeReadTime(wordcount) {
  const averageWordPerMinuteSpeed = 225
  return Math.max(Math.round(wordcount / averageWordPerMinuteSpeed), 1)
}

const debug = content => `<pre>${inspect(content)}</pre>`

const obfuscateEmail = email =>
  email
    .replace('.', '&nbsp;<small>dot</small>&nbsp;')
    .replace('@', '&nbsp;<small>at</small>&nbsp;')

module.exports = {
  formatDate,
  readableDate,
  htmlDateString,
  head,
  min,
  getAllTags,
  filterTagList,
  getByURL,
  readTime,
  debug,
  obfuscateEmail,
}
