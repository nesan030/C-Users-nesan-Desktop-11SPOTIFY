import mongoose from "mongoose";
import config from "./config/index.js";

mongoose.connect(config.DB)
.then(db=>console.log('DB esta conectado'))
.catch(error=>console.log(error))


//fecht()