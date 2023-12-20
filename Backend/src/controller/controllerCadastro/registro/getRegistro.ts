import * as db from "../../../model/dao/registro"
import { Parametro } from "../interface/parametro"

const getRegistro = async function(parametro: Parametro){

    let status
    if(Number(parametro.id)){
        status = await db.dbRegistroById(parametro)
    }else if(typeof parametro.nome === "string"){
        status = await db.dbRegistroByNome(parametro)
    }else if(typeof parametro.email === "string"){
        status = await db.dbRegistroByEmail(parametro)
    }else{
        status = await db.dbRegistro()
    }

    return {
        status: 200,
        data: status
    }

}

export{
    getRegistro
}