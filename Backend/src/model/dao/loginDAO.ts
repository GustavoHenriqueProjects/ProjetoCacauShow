import { PrismaClient, Tipo } from "@prisma/client"
import { Login } from "../../controller/controllerCadastro/interface/login"
const prisma = new PrismaClient()

const dbLogin = async function(dataBody: Login){
    let transaction

    try {

            const login = await prisma.tbl_pessoa.findFirst({
                where: {
                    email: dataBody.email,
                    senha: dataBody.senha
                }, select: {
                    id: true,
                    nome: true,
                    foto: true,
                    id_tipo_usuario: true
                }
            })

            if(login){
                return login
            }else{
                return false
            }

    } catch (error) {
        return false
    }
}
export{
    dbLogin
}