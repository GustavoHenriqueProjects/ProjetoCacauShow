import { dbPatchCadastro } from "../../../model/dao/pacthDAO"

const patchRegistro = async function(id: number, dataBody: any){

    const statusRegistro = await dbPatchCadastro(id, dataBody)
    if(statusRegistro){
        return {
            status: 200,
            message: "Registro atualizado com sucesso"
        }
    }else{
        return {
            status: 500,
            message: "Erro ao atulizar os registros. Verique os dados e tente novamente."
        }
    }

}

export{
    patchRegistro
}