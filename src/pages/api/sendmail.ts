import { sendMail } from '@/libs/mailer'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req
    switch (method) {
      case 'POST': {
        const { name, email, message } = req.body

        console.log(name, email, message)

        await sendMail(name, email, message)
        res.status(200).send('Success')
        break
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
        break
    }
  } catch (err) {
    res.status(400).json({
      error_code: 'api_one',
      // @ts-ignore
      message: err.message,
    })
  }
}

export default handler
