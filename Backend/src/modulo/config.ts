/**********************************************************************
 * Objetivo: Responsavel pelas constantes globais
 * Data: 19/22/2023
 * Versão: 1.0
 *********************************************************************/

const REQUIRE_SECRETE = "zx4A9R5batlbwk01mESa7NzNtyskUo"

/************************** CONSTANTES DE ERROS **********************/
const ERRO_REQUIRED_TOKEN = {status: 401, message: "Token não fornecido."}
const ERRO_INVALID_TOKEN = {status: 401, message: "Token inválido."}
const ERRO_CADASTRO = {status: 422, message: "Erro ao realizar seu cadastro. Verique os dados e tente novamente. obs: não é permitido cadastrar o mesmo email."}

/***************************************   CONSTANTES DE SUCESSO  ************************************************************************************************/
const CREATED_REGISTER = {status: 201, message: "Registro criado com sucesso."}
const UPDATE_USER = {status: 201, message: "Registro atualizado com sucesso"}
const DELETE_USER= {status: 200, message: "Registro deletado com sucesso."}

export{
    ERRO_REQUIRED_TOKEN,
    ERRO_INVALID_TOKEN,
    CREATED_REGISTER,
    UPDATE_USER,
    DELETE_USER,
    REQUIRE_SECRETE,
    ERRO_CADASTRO
}