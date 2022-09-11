import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import produtoRoute from './routes/produto.js'
// import methodOverride from 'method-override'

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride())
// app.use((err, req, res, next)=>{

//   // res.format({
//   //   'text/plain': function () {
//   //     res.send(err.message)
//   //   },
  
//   //   'text/html': function () {
//   //     res.send(`<p>${err.message}</p>`)
//   //   },
  
//   //   'application/json': function () {
//   //     res.send({ message: 'rota:'+err.message })
//   //   },
  
//   //   default: function () {
//   //     // log the request and respond with 406
//   //     res.status(406).send('Not Acceptable')
//   //   }
//   // })
//   // res.end()
//   res.json({ message: 'rota:'+err.message })
//   res.end()
// });
app.use('/produtos',produtoRoute)


app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});