import { Router } from "express";
import { fork } from "child_process";

const router = Router();

const info = {
  "Node Versión": process.version,
  Platform: process.platform,
  "Directorio de Ejecución": process.cwd(),
  "ID del proceso": process.pid,
  "Uso de la memoria": process.memoryUsage(),
  "Memoria total reservada": process.memoryUsage().rss,
  "Path de ejecución": process.execPath,
  "Argumentos de entrada": process.argv,
};

router.get("/info", (req, res) => {
  res.send(info);
});

router.get("/api/randoms", (req, res) => {
  const cant = req.query.cant || 10000;
  const child = fork("./src/getRandom.js");
  child.send(cant)
  child.on("message", (msg) => {
    res.send(msg)
   })

   child.on("exit", (code) => {
     console.log("Se ha cerrado el proceso", code)
   })
});

export default router;
