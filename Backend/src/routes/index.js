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

router.get('/PAROIMPAR/:numero',(req,res)=> {
    var response = req.params.numero;
    var resultado = Verificar(response);
    if (resultado == true){
        res.json({Resultado: 'El numero es par'})
    }else {
        res.json({Resultado: 'El numero es impar'})
    } 
});


function Verificar(numero){
    return (numero % 2) == 0;
}
export default router 