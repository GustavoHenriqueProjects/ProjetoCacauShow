import { PrismaClient } from "@prisma/client"
import { Cadastro} from "../../controller/controllerCadastro/interface/cadastro"

const prisma = new PrismaClient()

const dbCadastro = async function(dataBody: Cadastro){

    let transaction 
    
    try {
        
        transaction = await prisma.$transaction(async (prisma) => {
            const pessoa = await prisma.tbl_pessoa.create({
                data: {
                    nome: dataBody.nome,
                    email: dataBody.email,
                    senha: dataBody.senha,
                    data_nascimento: new Date(dataBody.data_nascimento.replace(/\//g, '-')),
                    profissao: dataBody.profissao,
                    foto: dataBody.foto,
                    id_tipo_usuario: dataBody.id_tipo_usuario
                  } 
            })

            const contato = await prisma.tbl_contato.create({
                data: {
                    id_pessoa: pessoa.id,
                    numero_celular: dataBody.numero_celular,
                    possui_whatsapp: dataBody.possui_whatsapp,
                }
            })

            await prisma.tbl_notificacao.create({
                data: {
                    id_contato: contato.id,
                    enviar_notificacao_sms: dataBody.enviar_notificacao_sms,
                    enviar_notificacao_whatsapp: dataBody.enviar_notificacao_whatsapp
                }
            })

        })

        return true

    } catch (error) {        
        return false
    }
}

export {
    dbCadastro
}