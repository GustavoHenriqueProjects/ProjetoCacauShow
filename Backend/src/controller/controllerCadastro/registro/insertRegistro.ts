import { dbCadastro } from "../../../model/dao/cadastroDAO"
import { Cadastro } from "../interface/cadastro"
import { validarCadastro } from "./validar/validarCadastro"
import * as message from "../../../modulo/config"

const cadastrar = async function(dataBody: Cadastro) {

    const status = validarCadastro(dataBody)
    if(typeof status === 'string'){

        return {
            status: 422,
            message: status
        }
    }else{

        const statusCadastro = await dbCadastro(dataBody)
        
        if(statusCadastro){
            return {
                status: 201,
                message: message.CREATED_REGISTER
            }
        }else{
            return {
                status: 500,
                message: message.ERRO_CADASTRO
            }
        }
        
    }
}

export{
    cadastrar
}