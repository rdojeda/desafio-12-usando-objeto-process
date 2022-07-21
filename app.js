import express from 'express';
import apiRoutes from './routes/apiRoutes.js';
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const yargs1 = yargs(hideBin(process.argv));

const args = yargs1.alias({ p: "port" }).argv;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', apiRoutes)


const PORT = args.port || 8080;

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});

