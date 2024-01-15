import {app} from "./src/app"

var http = app.get('http');

const port = /* process.env.PORT || */ 3333;

console.log('teste')

http.listen(port, () => {
  console.log(`Servidor iniciado, porta ${port}... ☑`);
});