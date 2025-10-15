import dotenv from 'dotenv'
dotenv.config()

export const getApiKey = () => {
  const key = process.env.TOMAS_API_KEY
  console.log(key)
  return key
}
