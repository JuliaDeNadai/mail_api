import { Request, Response } from 'express'
import { RabbitMQ } from '../service/rabbitmq'

class MailController {

    async send(request: Request, response: Response){

        const queue = new RabbitMQ()

        const channel = await queue.createMessageChannel()

        const object = { email: 'denadaijulia@gmail.com', message: "Email eviado!", title: "teste envio" }

        channel?.sendToQueue("mail", Buffer.from(JSON.stringify(object)))

        return response.status(202).json({ message: "Email adicionado a fila de envio!" })
    }
}

export { MailController }