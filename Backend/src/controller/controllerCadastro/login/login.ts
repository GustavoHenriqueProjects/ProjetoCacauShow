import { dbLogin } from "../../../model/dao/loginDAO"
import * as jwt from "../../../middleware/controllerJWT"
import { Login } from "../interface/login"

const login = async function(dataBody: Login){

    const statusLogin = await dbLogin(dataBody)
    if(statusLogin){
        const token = jwt.createJWT(statusLogin)

        return{
            status: 200,
            data: {
                id: statusLogin.id,
                nome: statusLogin.nome,
                foto: statusLogin.foto,
                tipoUsuarioId: statusLogin.id_tipo_usuario
            },
            token: token
        }
    }else{
        return{
            status: 401,
        }
    }
}

export{
    login
}