import express from 'express'
import indexRoutes from './routes/index.js'
import cors from 'cors'
const app = express()
app.use(cors());
// Settings
app.set('port', 3000)

// Routes
app.use(indexRoutes)

app.listen(app.get('port'), ()=>{
    console.log(`Aplicación corriendo en el puerto ${app.get('port')} :^)`)
})

