import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize  express
const app = express()


// Connect to DB
await connectDb()

// Middlewares
app.use(cors())

// Routes
app.get('/', (req, res) => res.send("API IS WORKING"))
app.post('/clerk',express.json(), clerkWebhooks)

// Port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})