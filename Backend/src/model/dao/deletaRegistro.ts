import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const dbdeletaRegistro = async function (id: number) {
    
    try {
        // Verifica se o usuário existe no banco de dados
    const existingUser = await prisma.tbl_pessoa.findUnique({
        where: { id: id },
        include: {
            contato:{
                include: {
                    notificacao: true
                }
            }
        }
      });

      if (existingUser) {
        // Exclui as notificações relacionadas
        await prisma.tbl_notificacao.deleteMany({
          where: {
            id_contato: {
              in: existingUser.contato.map((contato) => contato.id),
            },
          },
        });
  
        // Exclui os contatos relacionados
        await prisma.tbl_contato.deleteMany({
          where: {
            id_pessoa: id,
          },
        });
  
        // Exclui o usuário
        await prisma.tbl_pessoa.delete({
          where: { id: id },
        });


        return true
    }else{
        return false
    }

    } catch (error) {
        return false
    } finally {
        await prisma.$disconnect()
    }
}

export{
    dbdeletaRegistro
}