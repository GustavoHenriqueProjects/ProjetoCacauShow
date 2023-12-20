export interface Cadastro{
    id_tipo_usuario: number
    nome: string,
    email: string,
    senha: string,
    data_nascimento: string,
    profissao: string,
    foto: string,
    numero_celular: string,
    possui_whatsapp: boolean,
    enviar_notificacao_sms: boolean,
    enviar_notificacao_whatsapp: boolean
}