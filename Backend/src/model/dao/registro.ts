import { PrismaClient } from "@prisma/client";
import { Parametro } from "../../controller/controllerCadastro/interface/parametro";

const prisma = new PrismaClient();

const dbRegistro = async function () {
  
  try {
    let resultados = [];


     const getPessoa = await prisma.tbl_pessoa.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          data_nascimento: true,
          profissao: true,
          FK_TIPO_USUARIO_PESSOA: {
            select: {
              tipo: true,
            },
          },
        },
      });
    
    for (const pessoa of getPessoa) {
      const getContato = await prisma.tbl_contato.findFirst({
        where: {
          id_pessoa: pessoa.id,
        },
        select: {
          id: true,
          numero_celular: true,
          possui_whatsapp: true,
        },
      });

      const getNotificacao = await prisma.tbl_notificacao.findFirst({
        where: {
          id_contato: getContato?.id,
        },
        select: {
          enviar_notificacao_sms: true,
          enviar_notificacao_whatsapp: true,
        },
      });

      resultados.push({
        id: pessoa.id,
        nome: pessoa.nome,
        email: pessoa.email,
        foto: pessoa.foto,
        data_nascimento: pessoa.data_nascimento,
        profissao: pessoa.profissao,
        tipo_usuario: pessoa.FK_TIPO_USUARIO_PESSOA.tipo,
        numero_celular: getContato?.numero_celular,
        pussui_whatsapp: getContato?.possui_whatsapp,
        enviar_notificacao_sms: getNotificacao?.enviar_notificacao_sms,
        enviar_notificacao_whatsapp: getNotificacao?.enviar_notificacao_whatsapp
      });
    }        

    return resultados;
  } catch (error) {
    return false
  } finally {
    await prisma.$disconnect(); 
  }
}

const dbRegistroById = async function (parametro: Parametro) {
  
  try {
    let resultados = [];


     const getPessoa = await prisma.tbl_pessoa.findFirst({
      where: {
        id: parametro.id
      },
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          data_nascimento: true,
          profissao: true,
          FK_TIPO_USUARIO_PESSOA: {
            select: {
              tipo: true,
            },
          },
        },
      });
      
    if(getPessoa){
      const getContato = await prisma.tbl_contato.findFirst({
        where: {
          id_pessoa: getPessoa?.id,
        },
        select: {
          id: true,
          numero_celular: true,
          possui_whatsapp: true,
        },
      });

      const getNotificacao = await prisma.tbl_notificacao.findFirst({
        where: {
          id_contato: getContato?.id,
        },
        select: {
          enviar_notificacao_sms: true,
          enviar_notificacao_whatsapp: true,
        },
      });

      resultados.push({
        id: getPessoa.id,
        nome: getPessoa.nome,
        email: getPessoa.email,
        foto: getPessoa.foto,
        data_nascimento: getPessoa.data_nascimento,
        profissao: getPessoa.profissao,
        tipo_usuario: getPessoa.FK_TIPO_USUARIO_PESSOA.tipo,
        numero_celular: getContato?.numero_celular,
        pussui_whatsapp: getContato?.possui_whatsapp,
        enviar_notificacao_sms: getNotificacao?.enviar_notificacao_sms,
        enviar_notificacao_whatsapp: getNotificacao?.enviar_notificacao_whatsapp
      });
           

    return resultados;
    }else{
      return false
    }
      
  } catch (error) {
    return false
  } finally {
    await prisma.$disconnect(); 
  }
}

const dbRegistroByEmail = async function (parametro: Parametro) {
  
  try {
    let resultados = [];


     const getPessoa = await prisma.tbl_pessoa.findFirst({
      where: {
        email: parametro.email
      },
        select: {
          id: true,
          nome: true,
          email: true,
          data_nascimento: true,
          foto: true,
          profissao: true,
          FK_TIPO_USUARIO_PESSOA: {
            select: {
              tipo: true,
            },
          },
        },
      });
    
      if(getPessoa){
        const getContato = await prisma.tbl_contato.findFirst({
          where: {
            id_pessoa: getPessoa?.id,
          },
          select: {
            id: true,
            numero_celular: true,
            possui_whatsapp: true,
          },
        });
  
        const getNotificacao = await prisma.tbl_notificacao.findFirst({
          where: {
            id_contato: getContato?.id,
          },
          select: {
            enviar_notificacao_sms: true,
            enviar_notificacao_whatsapp: true,
          },
        });
  
        resultados.push({
          id: getPessoa.id,
          nome: getPessoa.nome,
          email: getPessoa.email,
          foto: getPessoa.foto,
          data_nascimento: getPessoa.data_nascimento,
          profissao: getPessoa.profissao,
          tipo_usuario: getPessoa.FK_TIPO_USUARIO_PESSOA.tipo,
          numero_celular: getContato?.numero_celular,
          pussui_whatsapp: getContato?.possui_whatsapp,
          enviar_notificacao_sms: getNotificacao?.enviar_notificacao_sms,
          enviar_notificacao_whatsapp: getNotificacao?.enviar_notificacao_whatsapp
        });
           
             
  
      return resultados;
      }else{
        return false
      }
      
  } catch (error) {
    return false
  } finally {
    await prisma.$disconnect(); 
  }
}
    
const dbRegistroByNome = async function (parametro: Parametro) {
  
  try {
    let resultados = [];    

     const getPessoa = await prisma.tbl_pessoa.findFirst({
      where: {
        nome: parametro.nome
      },
        select: {
          id: true,
          nome: true,
          email: true,
          data_nascimento: true,
          foto: true,
          profissao: true,
          FK_TIPO_USUARIO_PESSOA: {
            select: {
              tipo: true,
            },
          },
        },
      });
      
      if(getPessoa){
        const getContato = await prisma.tbl_contato.findFirst({
          where: {
            id_pessoa: getPessoa?.id,
          },
          select: {
            id: true,
            numero_celular: true,
            possui_whatsapp: true,
          },
        });
  
        const getNotificacao = await prisma.tbl_notificacao.findFirst({
          where: {
            id_contato: getContato?.id,
          },
          select: {
            enviar_notificacao_sms: true,
            enviar_notificacao_whatsapp: true,
          },
        });
  
        resultados.push({
          id: getPessoa.id,
          nome: getPessoa.nome,
          email: getPessoa.email,
          foto: getPessoa.foto,
          data_nascimento: getPessoa.data_nascimento,
          profissao: getPessoa.profissao,
          tipo_usuario: getPessoa.FK_TIPO_USUARIO_PESSOA.tipo,
          numero_celular: getContato?.numero_celular,
          pussui_whatsapp: getContato?.possui_whatsapp,
          enviar_notificacao_sms: getNotificacao?.enviar_notificacao_sms,
          enviar_notificacao_whatsapp: getNotificacao?.enviar_notificacao_whatsapp
        });
           
             
  
      return resultados;
      }else{
        return false
      }
      
  } catch (error) {
    return false
  } finally {
    await prisma.$disconnect(); 
  }
}

export{
    dbRegistro,
    dbRegistroById,
    dbRegistroByNome,
    dbRegistroByEmail
}

