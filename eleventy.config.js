const {
  EleventyHtmlBasePlugin,
  EleventyRenderPlugin,
} = require('@11ty/eleventy')

// External Plugins
const pluginBundle = require('@11ty/eleventy-plugin-bundle')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginWebc = require('@11ty/eleventy-plugin-webc')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItLinkAttributes = require('markdown-it-link-attributes')
const pluginTOC = require('eleventy-plugin-toc')
const { wordCount } = require('eleventy-plugin-wordcount')

// Custom plugins
const { sidenote, marginnote } = require('./config/sidenoteParser.js')
const pluginImages = require('./config/images.js')
const seoLinter = require('./config/seoLinter.js')

const {
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
} = require('./config/filters.js')

const { getAuthorAge } = require('./config/shortcodes.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  /* --- Plugins ------------------------------------------------------------ */

  // App plugins
  eleventyConfig.addPlugin(pluginImages)

  // Official plugins
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(pluginBundle)
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(pluginWebc, {
    components: '_components/**/*.webc',
  })
  eleventyConfig.addPlugin(wordCount)
  eleventyConfig.addPlugin(pluginTOC)

  // Customize Markdown library settings
  eleventyConfig.amendLibrary('md', mdLib => {
    mdLib
      // Header anchors
      .use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({
          placement: 'after',
          class: 'header-anchor',
          symbol: '#',
          ariaHidden: false,
        }),
        level: [2, 3, 4],
        slugify: eleventyConfig.getFilter('slugify'),
      })
      // Customize markdown links attributes
      .use(markdownItLinkAttributes, [
        {
          matcher(href) {
            // match external links
            return href.match(/^https?:\/\//)
          },
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        },
      ])
      // Parse custom markdown ^[side notes] and +[margin notes]
      .use(sidenote)
      .use(marginnote)
  })

  eleventyConfig.addLayoutAlias('base', 'base.njk')
  eleventyConfig.addLayoutAlias('page', 'page.njk')

  /* --- Filters & Shortcodes ----------------------------------------------- */

  eleventyConfig.addFilter('formatDate', formatDate)
  eleventyConfig.addFilter('readableDate', readableDate)
  eleventyConfig.addFilter('htmlDateString', htmlDateString)
  eleventyConfig.addFilter('head', head)
  eleventyConfig.addFilter('min', min)
  eleventyConfig.addFilter('getAllTags', getAllTags)
  eleventyConfig.addFilter('filterTagList', filterTagList)
  eleventyConfig.addFilter('getByURL', getByURL)
  eleventyConfig.addFilter('getByFileSlug', getByFileSlug)
  eleventyConfig.addFilter('readTime', readTime)
  eleventyConfig.addFilter('debug', debug)
  eleventyConfig.addFilter('obfuscateEmail', obfuscateEmail)
  eleventyConfig.addFilter('getIndex', getIndex)
  eleventyConfig.addFilter('getPrevious', getPrevious)
  eleventyConfig.addFilter('getNext', getNext)
  eleventyConfig.addFilter('getPrevInSeries', getPrevInSeries)
  eleventyConfig.addFilter('getNextInSeries', getNextInSeries)
  eleventyConfig.addFilter('getSeriesData', getSeriesData)

  eleventyConfig.addShortcode('authorAge', getAuthorAge)

  /* --- Passthrough & Watch ----------------------------------------------- */

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    'public/img/favicon/*': '/',
  })

  // Watch content images for the image pipeline.
  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}')

  eleventyConfig.addLinter('seoLinter', seoLinter)

  return {
    // Template languages used to pre-process *.md, *.html and global data files
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'content', // default: "."
      includes: '../_includes', // default: "<input>/_includes"
      data: '../_data', // default: "<input>/_data"
      output: '_site', // default: "_site"
      layouts: '../_layouts', // default: "<input>/_includes"
    },
  }
}
