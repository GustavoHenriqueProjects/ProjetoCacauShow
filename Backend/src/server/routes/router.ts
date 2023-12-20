import { Router, Request, Response, NextFunction } from "express"
import bodyParser from 'body-parser'
import * as jwt  from "jsonwebtoken"
import * as message from "../../modulo/config"
import { cadastrar } from "../../controller/controllerCadastro/registro/insertRegistro"
import { login } from "../../controller/controllerCadastro/login/login"
import { getRegistro } from "../../controller/controllerCadastro/registro/getRegistro"
import { patchRegistro } from "../../controller/controllerCadastro/registro/patchRegistro"
import { deletaRegistro } from "../../controller/controllerCadastro/registro/deletaRegistro"

const jsonParser = bodyParser.json()
const router = Router()

const verifyJWT = async function(request: Request, response: Response, next: NextFunction) {

    const token = request.headers['x-api-key'];        
    const SECRETE = message.REQUIRE_SECRETE

    if (!token) {                        
        return response.status(401).json(message.ERRO_REQUIRED_TOKEN);
    }

    try {

        jwt.verify(Array.isArray(token) ? token[0] : token, SECRETE)

        next();
    } catch (error) {                        
        return response.status(401).json(message.ERRO_INVALID_TOKEN)
    }
}

router.post('/v1/cacaushow/cadastro', jsonParser, async function (request: Request, response: Response) {
    
        const dataBody = request.body
        console.log(dataBody);
        
        const status = await cadastrar(dataBody)
     
        response.status(status.status)
        response.json(status)
       
})


router.post('/v1/cacaushow/login', jsonParser, async function (request: Request, response: Response) {
    
    const dataBody = request.body

    const status = await login(dataBody)
 
    response.status(status.status)
    response.json(status)
   
})

router.get('/v1/cacaushow/cadastro', async function (request: Request, response: Response) {
    
    const data = {
        id: Number(request.query.id),
        nome: request.query.nome as string, 
        email: request.query.email as string
    }

    const status = await getRegistro(data)
    response.status(status.status)
    response.json(status)
    
})

router.patch('/v1/cacaushow/cadastro', jsonParser, async function (request: Request, response: Response) {
    const id = request.query.id
    const dataBody = request.body      
      
    const status = await patchRegistro(Number(id), dataBody)
    response.status(status.status)
    response.json(status)
    
})

router.delete('/v1/cacaushow/cadastro', async function (request: Request, response: Response){
    const id = request.query.id
    console.log(id);
    
    const status = await deletaRegistro(Number(id))
    response.status(status.status)
    response.json(status)

})

export{
    router
}