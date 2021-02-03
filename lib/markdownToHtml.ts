import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

export default function markdownToHtml(markdown: string): string {
  const result = remark().use(highlight).use(html).processSync(markdown)
  return result.toString()
}
