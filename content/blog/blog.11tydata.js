const dayjs = require('dayjs')

const isProd = process.env.NODE_ENV === 'production'

let data = {
	tags: ['posts'],
	layout: 'post',
	isPost: true,
	date: isProd ? 'git Created' : 'Created',
	eleventyComputed: {
		showLastEdited: ({ page, lastEdited }) =>
			lastEdited ? dayjs(lastEdited).isAfter(page.date, 'day') : false,
		// TODO: add wordcount as a computed data rather than a filter to avoid computing it more than once?
	},
}

data.date = isProd ? 'git Created' : 'Created'

/*
 * Only the "date" field can be automated with "git Created / Modified" currently.
 * So I'll have to handle ther modification date manually for the moment.
 *
 * See :
 * - https://www.11ty.dev/docs/dates/ : using "Created" etc. for page.date
 * - https://github.com/11ty/eleventy/issues/142 : adding date based on git commits
 * - https://github.com/11ty/eleventy/issues/869 :using more than one "automated" date
 */

// data.lastModified = isProd ? "git Last Modified" : "Last Modified";

module.exports = data
