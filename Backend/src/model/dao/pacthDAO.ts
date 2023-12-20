import { PrismaClient } from "@prisma/client";
import { PatchCadastro } from "../../controller/controllerCadastro/interface/patchCadastro";

const prisma = new PrismaClient();

const dbPatchCadastro = async function (id: number, data: PatchCadastro) {
  try {
    const dados = await prisma.tbl_pessoa.update({
      where: {
        id: id,
      },
      data: {
        nome: data.nome,
        email: data.email,
        data_nascimento: `${data.date}T00:00:00.000Z`,
      },
    });

    const numero_celular = await prisma.tbl_contato.update({
      where: {
        id_pessoa: dados.id,
        numero_celular: data.numero_celular_antigo,
      },
      data: {
        numero_celular: data.numero_celular_novo,
      },
    });

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

export { dbPatchCadastro };
