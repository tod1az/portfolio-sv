import dotenv from 'dotenv'
dotenv.config()

export const getApiKey = () => {
  return process.env.TOMAS_API_KEY
}
