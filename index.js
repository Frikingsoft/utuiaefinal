import { servidor,__dirname} from "./config.js"
import { cursos } from "./db/cursos.js"

servidor.get("/",(req,res)=>{
   res.send(cursos)
})
