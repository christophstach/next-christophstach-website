import remark from 'remark'
import highlight from 'remark-highlight.js'
import html from 'remark-html'

export default function markdownToHtml(markdown: string): string {
  const result = remark().use(html).use(highlight).processSync(markdown)
  return result.toString()
}
