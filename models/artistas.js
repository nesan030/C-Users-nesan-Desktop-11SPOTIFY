import {Schema,model} from 'mongoose';
const ArtistasSchema = new Schema({
    nombre:{
        type:String,
        require:true,
    },
    followers:{
        type:Number,
        require:true,
    },
    genero:{
        type:String,
        require:true,
    },
    imagen:{
        type:String,
        require:true

    }
})
export default model('Artista',ArtistasSchema)