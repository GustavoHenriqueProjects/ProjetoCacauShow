/**************************************************
 * Objetivo: implementação do JWT no projeto
 * Data: 31/07/2023
 * Versão: 1.0
 *************************************************/
import * as message from "../modulo/config"

const jwt = require('jsonwebtoken')
const SECRETE = message.REQUIRE_SECRETE
const EXPIRES = "24h"

interface Payload {
    id: number, 
    id_tipo_usuario: number
}

const createJWT = (payload: Payload): string => {

    const token = jwt.sign({ 
        id: payload.id,
        id_tipo_usuario: payload.id_tipo_usuario
     }, SECRETE, { expiresIn: EXPIRES });
    return token
}

const validate = (token: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRETE, (err: any, decoded: any) => {
            if (err) {
                resolve(false); // Token inválido ou expirado
            } else {
                resolve(true); // Token válido
            }
        })
    })
}

export {
    createJWT,
    validate
}