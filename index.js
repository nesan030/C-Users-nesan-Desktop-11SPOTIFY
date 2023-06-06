import express from "express"
const app=express()
import morgan from "morgan"
import config from './config/index.js'
import artistasRoutes from './routes/artistas.routes.js'
import  './mongodb.js'

//middleware
app.use(morgan("dev"))
app.use(express.json())

//rutas principal

app.get('/',(req,res)=>{
    res.send("Hola mundo")
})

app.use('/artistas',artistasRoutes)

app.all('/*',(req,res)=>{
    res.status(404).send('la pagina no funciona')
})

app.listen(config.PORT,()=>{
    console.log('servidor ejecutandose en el puerto')
})