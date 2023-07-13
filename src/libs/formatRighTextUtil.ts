const { load } = require('cheerio')
import hljs from 'highlight.js'

export const formatRichText = (richText: string) => {
  const $ = load(richText)
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text)
    try {
      return hljs.highlight(text, {
        language: lang?.replace(/^language-/, '') || '',
      })
    } catch (e) {
      return hljs.highlightAuto(text)
    }
  }
  $('pre code').each((_: number, elm: Element) => {
    const lang = $(elm).attr('class')
    const res = highlight($(elm).text(), lang)
    $(elm).html(res.value)
  })
  return $.html()
}
