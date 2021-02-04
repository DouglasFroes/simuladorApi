import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import 'express-async-errors'

dotenv.config()
const app = express()
const routes = Router()

app.use(cors())
app.use(express.json())


routes.post('/', async (req, res) => {
  const { url, options } = req.body

  try {
    const tess = await fetch(url, options)

    const respose = await tess.json()
    res.status(200).json(respose)
  } catch (err: any) {
    res.status(400).json(err)
  }
})


app.use(routes)
app.use((error, request, response, next) => {
  console.log(error)

  return response.status(500).json({ message: 'Internal server error' })
})

export { app }
