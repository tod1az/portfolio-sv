import express from 'express'
import { sendEmail } from './services/resendhandler'

export const router = express.Router()

router.get('/', (_req, res) => {
  res.send({ message: 'this is the email route hehe' })
})

router.post('/', async (req, res) => {
  const { message, sender, target } = req.body
  try {
    await sendEmail({ message, sender, target })
    res.status(200)
    return res.json({ sended: true })
  } catch (error) {
    return res.json({ sended: false, message: 'something went wrong' })
  }
})
