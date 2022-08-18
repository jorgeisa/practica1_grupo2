import {Router} from 'express'
const router = Router()

// Ruta Raiz
router.get('/', (req, res)=>{
    res.json(
        {
            name: 'Analisis y Diseño de Sistemas 1',
            Integrante1: 'Jorge Isaac Xicol Vicente - 201807316 - Pratica 1 - Grupo 2',
            Integrante2: 'Josué Alfredo Gonzáles Caal - 201602489 - Practica 1 - Grupo 2',
            Integrante3: 'Virginia Sarai Gutierrez Depaz - 201504443 - Practica 1 - Grupo 2',
            Integrante4: 'Rodolfo Alexander Avalos Soto - 201801210 - Practica 1 - Grupo 2'
        })
})

export default router 