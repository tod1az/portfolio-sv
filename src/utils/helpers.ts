import dotenv from 'dotenv'
dotenv.config()

export const getApiKey = (target: string): any => {
  let key = null
  if (process.env.TOMAS_EMAIL === target) {
    key = process.env.TOMAS_API_KEY
  } else if (process.env.EDUARDO_EMAIL === target) {
    key = process.env.EDUARDO_API_KEY
  }
  if (key === null) throw new Error('No Resend api key')
  return key
}
