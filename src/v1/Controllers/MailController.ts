import { Request, Response } from 'express'

class MailController {

    async send(request: Request, response: Response){

        return response.status(202).json({ message: "Email adicionado a fila de envio!" })
    }
}

export { MailController }