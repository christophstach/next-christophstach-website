import { NextApiRequest, NextApiResponse } from 'next'

export default function hello(req: NextApiRequest, res: NextApiResponse): void {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
