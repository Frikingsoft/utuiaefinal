import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import morgan from "morgan";
import   cors   from "cors"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const servidor = express()
servidor.use(express.json())
servidor.use(morgan("dev"))
servidor.use(express.static(`${__dirname}/dist`))

servidor.set("puerto", process.env.PORT || 80)

servidor.listen(servidor.get("puerto"))

servidor.use(cors())
export {
    servidor,
    __dirname
}