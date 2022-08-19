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
    if (!isNaN(response)){
    var resultado = Verificar(response);
    if (resultado == true){
        res.json({Resultado: 'El numero es par'})
    }else if (resultado == false) {
        res.json({Resultado: 'El numero es impar'})
    }}else{
        res.json({Resultado: 'No es un numero'})
    }
});


router.get('/alreves/:palabra', function(req, res) { 
    if (isNaN(req.params.palabra) ){
    let cadenaAlreves = alreves(req.params.palabra);

    res.json({ 
        mensaje: cadenaAlreves
    })  }else{
        res.json({mensaje: 'No es una palabra'})
    }
})

function Verificar(numero){

        return (numero % 2) == 0;

}

// Endpoint Fibonacci
router.get('/fibo/:numero', (req, res)=> {
    let numero = req.params.numero
    if (!isNaN(numero) ){
    var fibonacci_numero = fibonacci_func(numero);
    res.json(
        {
            Funcion: 'Fibonacci',
            Numero: numero,
            Fibonacci: fibonacci_numero
        }
    ) }else{
        res.json({Fibonacci: 'No es un numero'})
    }
})

// FUncion Raiz
router.get('/raiz/:numero', function(req, res) { 
    if (!isNaN(req.params.numero) ){
    let result_raiz = raiz(req.params.numero);

    res.json({ 
        mensaje: result_raiz
    })  }else{
        res.json({mensaje: 'No es un numero'})
    }
})


function raiz(numero){
    return Math.cbrt(numero)
}

//Funcion division
router.get('/division/:numero1/:numero2', function(req, res) { 
    if (!isNaN(req.params.numero1) && !isNaN(req.params.numero2)){
    let division = div(req.params.numero1,req.params.numero2);
    res.json({ 
        mensaje: division
    })  }else{
        res.json({mensaje: 'No es un numero'})
    }
})

function div(n1,n2){
    return n1/n2;
  }

// Funcion Fibonacci
function fibonacci_func(numero){
    if (numero <= 1) return numero

    return fibonacci_func(numero-1) + fibonacci_func(numero - 2)
}


function alreves(cadena){
    var resultado = '';
    

    for(let i = cadena.length -1; i>=0; --i){
        resultado += cadena[i];
    }

    return resultado;
}

router.get('/potencia/:base', function(req, res) { 
    let base = req.params.base;
    if (!isNaN(base) ){
    res.json({ 
        mensaje: Math.pow(base, 3)
    })  }else{
        res.json({mensaje: 'No es un numero'})
    }
})


router.get('/multiplicacion/:numero1/:numero2', function(req, res) { 
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    if (!isNaN(numero1) && !isNaN(numero2)){
    res.json({ 
        resultado:numero1*numero2
    })  }else{
        res.json({resultado: 'No es un numero'})
    }
})



export default router 
