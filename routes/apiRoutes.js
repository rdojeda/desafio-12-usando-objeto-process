import { Router } from 'express';
import { memoryUsage } from 'process';
import { fork } from 'child_process';

const router = Router();

router.get('/info', (req, res) => {
    res.json({
      version: `${process.version}`,
      path: `${process.execPath}`,
      plataforma: `${process.platform}`,
      processId: `${process.pid}`,
      memoria: `${memoryUsage().rss}`,
      argumentos: `${process.argv0}`,
      carpeta: `${process.argv}`  
    });
   
})

router.get('/api/randoms/:cant', (req, res) => {
  const rpta = fork('../utils/child.js')
  const { cant } = req.query
  let max = cant || 10
    rpta.on('message', (message) => {
   console.log(message)
  })
})

export default router
