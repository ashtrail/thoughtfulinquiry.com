// Credit : Taniki from 11d.im
// - https://11d.im/notices/md-tufte/
// - https://gist.github.com/taniki/0eb61559482e40768b40dc5aea71dff4

// The format is ^[content] for sidenotes and +[content] for margin notes

function generateInlineParser(
  symbol,
  idProperty,
  toggleRuleId,
  contentRuleId,
  parseLinkLabel
) {
  return (state, silent) => {
    let tokens
    const max = state.posMax
    const start = state.pos

    if (start + 2 >= max) {
      return false
    }
    if (state.src.charCodeAt(start) !== symbol) {
      return false
    }
    if (state.src.charCodeAt(start + 1) !== 0x5b /* [ */) {
      return false
    }

    const labelStart = start + 2
    const labelEnd = parseLinkLabel(state, start + 1)

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) {
      return false
    }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    if (!silent) {
      if (!state.env[idProperty]) {
        state.env[idProperty] = 1
      }

      state.md.inline.parse(
        state.src.slice(labelStart, labelEnd),
        state.md,
        state.env,
        (tokens = [])
      )

      const noteId = state.env[idProperty]++
      let token = state.push(toggleRuleId, '', 0)
      token.meta = { id: noteId }

      token = state.push(contentRuleId, '', 0)
      token.content = state.src.slice(labelStart, labelEnd)
      token.children = tokens
    }

    state.pos = labelEnd + 1
    state.posMax = max
    return true
  }
}

function marginnote(md) {
  const renderMarginNoteToggle = (tokens, idx) => {
    const id = tokens[idx].meta.id
    const label = `<label for="mn-${id}" class="margin-toggle">💡</label>`
    const input = `<input type="checkbox" id="mn-${id}" class="margin-toggle"/>`
    return `${label}${input}`
  }

  const renderMarginNoteContent = (tokens, idx) => {
    const content = tokens[idx].content
    const marginNote = `<span class="marginnote">${md.renderInline(
      content
    )}</span>`
    return marginNote
  }

  const toggleRuleId = 'marginnote_toggle'
  const contentRuleId = 'marginnote'

  md.renderer.rules[toggleRuleId] = renderMarginNoteToggle
  md.renderer.rules[contentRuleId] = renderMarginNoteContent

  const marginNoteInline = generateInlineParser(
    0x2b, // +
    'marginNoteId',
    toggleRuleId,
    contentRuleId,
    md.helpers.parseLinkLabel
  )

  md.inline.ruler.after('image', 'marginnote_inline', marginNoteInline)
}

function sidenote(md) {
  const renderSideNoteToggle = (tokens, idx) => {
    const id = tokens[idx].meta.id
    const label = `<label for="sn-${id}" class="margin-toggle sidenote-number"></label>`
    const input = `<input type="checkbox" id="sn-${id}" class="margin-toggle"/>`
    return `${label}${input}`
  }

  const renderSideNoteContent = (tokens, idx) => {
    const content = tokens[idx].content
    const sideNote = `<span class="sidenote">${md.renderInline(content)}</span>`
    return sideNote
  }

  const toggleRuleId = 'sidenote_toggle'
  const contentRuleId = 'sidenote'

  md.renderer.rules[toggleRuleId] = renderSideNoteToggle
  md.renderer.rules[contentRuleId] = renderSideNoteContent

  const sideNoteInline = generateInlineParser(
    0x5e, // ^
    'sideNoteId',
    toggleRuleId,
    contentRuleId,
    md.helpers.parseLinkLabel
  )

  md.inline.ruler.after('image', 'sidenote_inline', sideNoteInline)
}

module.exports = {
  sidenote,
  marginnote,
}
