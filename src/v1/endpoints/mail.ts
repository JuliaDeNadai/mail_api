import { Router } from "express"
import { MailController } from "../Controllers/MailController"

const mailController = new MailController()
const routerMail = Router()

routerMail.route("/")
    .post(mailController.send)


export {routerMail}