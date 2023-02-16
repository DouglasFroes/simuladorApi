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

routes.post('/in', async (req, res) => {
  console.log(req.body)
  console.log(req.query)
  console.log(req?.rawHeaders)
  
  console.log(req.url)

  res.status(200).json({ message: 'ok' })
})

routes.get('/in', async (req, res) => {
  res.status(200).json({ message: 'ok' })
})


app.use(routes)

export { app }
