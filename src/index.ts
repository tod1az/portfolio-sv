import express from 'express'
import { router } from './router'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3001

app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.get('/ping', (_req, res) => {
  console.log('Ping')
  return res.json({ message: 'cambie' })
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${3001}`)
})

app.use('/email', router)
