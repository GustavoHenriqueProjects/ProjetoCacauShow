import { Cadastro } from "../../interface/cadastro"

const validarCadastro = function(dataBody: Cadastro){

  if (!dataBody.id_tipo_usuario || typeof dataBody.id_tipo_usuario !== 'number') {
    return "Tipo de usuário é obrigatório.";
  }
  if (!dataBody.nome) {
    return "Nome é obrigatório.";
  }
  if (!dataBody.email) {
    return "Email é obrigatório.";
  }
  if (!dataBody.senha) {
    return "Senha é obrigatória.";
  }
  if (!dataBody.data_nascimento) {
    return "Data de nascimento é obrigatória e deve ser uma data válida.";
  }
  if (!dataBody.profissao) {
    return "Profissão é obrigatória.";
  }
  if (!dataBody.foto) {
    return "Foto é obrigatória.";
  }
  if (!dataBody.numero_celular) {
    return "Número de celular é obrigatório.";
  }

  // Validate phone number format
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4,5}$/;
  if (!phoneRegex.test(dataBody.numero_celular)) {
    return "Formato de número de celular inválido.";
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (dataBody.email && !emailRegex.test(dataBody.email)) {
    return "Formato de email inválido.";
  }

  return true;
}

export {
    validarCadastro
}