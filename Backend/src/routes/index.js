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
            res.json({
                    Resultado: 'El numero es par',
                    NumeroIngresado: response
                })
        }else if (resultado == false) {
            res.json({
                    Resultado: 'El numero es impar',
                    NumeroIngresado: response
                })
        }
    }else{
        res.json({Resultado: 'No es un numero'})
    }
});


router.get('/alreves/:palabra', function(req, res) { 
    if (isNaN(req.params.palabra) ){
        var response = req.params.palabra
        let cadenaAlreves = alreves(response);

        res.json({ 
            mensaje: cadenaAlreves,
            palabraIngresada: response
        })  
    }else{
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
        var response = req.params.numero
        let result_raiz = raiz(response);

        res.json({ 
            mensaje: result_raiz,
            numeroIngresado: response
        })  
    }else{
        res.json({mensaje: 'No es un numero'})
    }
})


function raiz(numero){
    let resultado;
    let positivo = 'Numero positivo';
    resultado = Math.cbrt(numero)

    if(resultado <0){
        positivo = 'Numero negativo';
        return [resultado,positivo];
    }else{
        return [resultado,positivo]
    }
}

//Funcion division
router.get('/division/:numero1/:numero2', function(req, res) { 
    if (!isNaN(req.params.numero1) && !isNaN(req.params.numero2)){
        var response_1 = req.params.numero1
        var response_2 = req.params.numero2
        let division = div(response_1,response_2);
        res.json({ 
            mensaje: division,
            numero_1: response_1,
            numero_2: response_2
        })  
    }else{
        res.json({mensaje: 'No es un numero'})
    }
})

function div(n1,n2){
    return [n1/n2,n1%n2];
  }

// Funcion Fibonacci
function fibonacci_func(numero){
    if (numero <= 1) return numero

    return fibonacci_func(numero-1) + fibonacci_func(numero - 2)
}


function alreves(cadena){
    var resultado = '';
    var palindromo = 'false';

    for(let i = cadena.length -1; i>=0; --i){
        resultado += cadena[i];
    }

    if(cadena == resultado){//
        palindromo = true;
        return [resultado,palindromo];
    }else{
        return [resultado,palindromo];
    }
}

router.get('/potencia/:base', function(req, res) { 
    let base = req.params.base;
    if (!isNaN(base) ){
        var _mensaje = ""
        if(base==0){
            _mensaje ="Cuando la base es CERO el resultado es 0"
        }else{
            _mensaje= Math.pow(base, 3) 
        } 
        res.json({ 
            mensaje: _mensaje
        })
    }else{
        res.json({mensaje: 'No es un numero'})
    }
})


router.get('/multiplicacion/:numero1/:numero2', function(req, res) { 
    let numero1 = req.params.numero1;
    let numero2 = req.params.numero2;
    if (!isNaN(numero1) && !isNaN(numero2)){
        var _resultado = ""
        if (numero1==0 || numero2==0) {
            _resultado="todo numero multiplicado por CERO es igual a 0";
        } else {
            _resultado=numero1*numero2;
        }       
        
        res.json({ 
            resultado: _resultado
        })  
    }else{
        res.json({resultado: 'No es un numero'})
    }
})



export default router 
