const dayjs = require('dayjs')

getAuthorAge = () => {
  const now = dayjs()
  return now.diff('1996-04-21', 'year')
}

module.exports = {
  getAuthorAge,
}
