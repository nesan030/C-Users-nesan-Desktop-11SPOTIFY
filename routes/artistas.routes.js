import express from 'express';
const router =express.Router();
import Artista from '../models/artistas.js';
import artistas from "../models/artistas.js";

// /artistas/

router.post('/',async(req,res)=>{
    try{
        const artista=new Artista(req.body)
        await artista.save()
        res.status(201).json({mensaje:'artista creado'})
    }
    catch(error){
        console.log(error.mensaje)
        res.status(500).json({mensaje:'error interno del sistema'})
    }
    })

    router.get('/obtener-artistas', async (req,res)=>{
        try{
            const artistas=await Artista.find();
            res.status(200).json(artistas)
        }
        catch(error){
            console.log(error.mensaje)
        res.status(500).json({mensaje:'error interno del sistema'})
        }
    });

export default router

// res.send('Hola desde el router de artistas')