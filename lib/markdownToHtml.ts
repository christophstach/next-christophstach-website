import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

export default function markdownToHtml(markdown: string): string {
  const result = remark().use(html).use(highlight).processSync(markdown)
  return result.toString()
}
