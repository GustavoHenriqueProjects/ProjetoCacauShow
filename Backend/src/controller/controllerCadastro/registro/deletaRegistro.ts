import { dbdeletaRegistro } from "../../../model/dao/deletaRegistro"

const deletaRegistro = async function(id: number){

 
    const status = await dbdeletaRegistro(id)
    if(status){
        return {
            status: 200,
            message: "registro deletado com sucesso."
        }
    }else{
        return {
            status: 500,
            message: "Erro ao deletar registro, obs: Verique os dados e tente novamente."
        }
    }

}

export{
    deletaRegistro
}