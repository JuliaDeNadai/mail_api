import { Channel, connect } from 'amqplib';
import { config } from 'dotenv';

var amqp = require('amqplib/callback_api');

class RabbitMQ{

  async createMessageChannel(): Promise<Channel | null> {
    config()

    try {
      const connection = await connect(process.env.AMQP_SERVER ?? "")

      const channel = await connection.createChannel()
      await channel.assertQueue(process.env.QUEUE_NAME ?? "default")

      return channel
    }
    catch(error){

      console.log(error)
      return null
    }
  }
  
}

export { RabbitMQ }
