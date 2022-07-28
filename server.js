import express from 'express'
import apiRoutes from './src/routes/apiRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', apiRoutes)


const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
})
server.on("error", (err) => console.log(err))

