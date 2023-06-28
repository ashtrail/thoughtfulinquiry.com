const fs = require('fs')
const he = require('he')
const chalk = require('chalk')
const metadata = require('../_data/metadata.js')

const MAX_TITLE_LENGTH = 60
const MAX_DESC_LENGTH = 155

const extract = (string, pattern) => {
  if (!string) return null
  const match = string.match(pattern)
  return (match?.length >= 2 && match[1]) || null
}

const cleanExtract = (string, pattern) => {
  const result = extract(string, pattern)
  return result !== null ? he.decode(result.trim()) : null
}

// TODO: See if I can group all the warnings for one file by pushing the warning in an array an only logging it once
// Adding a configuration with options such as chosing the max lengths and wether to display oepn graph warnigns would be nice
module.exports = function () {
  const outputFile = this.page.outputPath
  if (!outputFile.endsWith('.html')) {
    return
  }

  const warn = message =>
    console.warn(
      chalk.yellow(
        `SEO Linter: '${this.page.inputPath}' ${message} ('${outputFile}')`
      )
    )

  let file
  try {
    file = fs.readFileSync(outputFile, 'utf8')
  } catch (err) {
    console.error(err)
    return
  }
  const head = extract(file, /<head>((?:.|\n)*)<\/head>/m)
  if (head === null) {
    warn('does not have a <head> tag')
    return
  }
  const title = cleanExtract(head, /<title>(.*)<\/title>/)
  if (title === null) {
    warn('does not have a <title> tag')
  } else if (title.length > MAX_TITLE_LENGTH) {
    warn(`title is too long (${title.length}/${MAX_TITLE_LENGTH})`)
  }

  const description = cleanExtract(
    head,
    /<meta name="description" content="(.*)" ?\/>/
  )
  if (description === null) {
    warn('does not have a <meta name="description"> tag')
    return
  } else if (description.length > MAX_DESC_LENGTH) {
    warn(`description is too long (${description.length}/${MAX_DESC_LENGTH})`)
  }

  // Open Graph data
  const ogTags = ['og:locale', 'og:site_name'] // og:image, og:image:width, og:image:height, og:image:alt

  for (const tag of ogTags) {
    const regex = new RegExp(`<meta property="${tag}" content="(.*)" ?\/>`)
    if (extract(file, regex) === null) {
      warn(`does not have a <meta name="${tag}"> tag`)
    }
  }

  const ogTitle = cleanExtract(
    head,
    /<meta property="og:title" content="(.*)" ?\/>/
  )
  if (ogTitle === null) {
    warn('does not have a <meta property="og:title"> tag')
  }

  const ogDesc = cleanExtract(
    head,
    /<meta property="og:description" content="(.*)" ?\/>/
  )
  if (ogTitle === null) {
    warn('does not have a <meta property="og:description"> tag')
  }

  const ogType = cleanExtract(
    head,
    /<meta property="og:type" content="(.*)" ?\/>/
  )
  if (ogType === null) {
    warn('does not have a <meta property="og:type"> tag')
  } else if (ogType !== 'article' && ogType !== 'website') {
    warn(
      '<meta property="og:type"> tag should either be "article" or "website"'
    )
  } else if (ogType === 'article') {
    if (ogTitle === metadata.title) {
      warn('a post should have its own title')
    }
    if (ogDesc === metadata.description) {
      warn('a post should have its own description')
    }
  }
}
