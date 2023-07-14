const { load } = require('cheerio')
import highlight from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

export const formatRichText = (richText: string) => {
  const $ = load(richText)

  const highlighted = (text: string, lang?: string) => {
    if (!lang) return highlight.highlightAuto(text)
    try {
      return highlight.highlight(text, {
        language: lang?.replace(/^language-/, '') || '',
      })
    } catch (e) {
      return highlight.highlightAuto(text)
    }
  }
  $('pre code').each((_: number, elm: Element) => {
    const lang = $(elm).attr('class')
    const res = highlighted($(elm).text(), lang)
    $(elm).html(res.value)
  })
  return $.html()
}
