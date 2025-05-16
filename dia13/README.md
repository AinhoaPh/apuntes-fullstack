# REDuce
Es un metodo para simplificar sus valores a un unico valor 

```jsx
// Metodo de REDUCE

//nuestraLista.reduce(callBack,inicialValor);

//callback
//(acumulador,currectValor)=>{}

//Restar todos los valores de un array:
const listaNumeros = [175,50,25]
const resultados = listaNumeros. reduce(miFuncion);

function miFuncion(total, num){
    return total-num;
}
const total= listaNumeros-reduce(getSuma,0)// lo mismo que la funcion de arriba, get suma 


// Sumar todos los numeros d eun array redondeando cda numero 

const listaNumeros=[15.5,2.3,1.1,4.7]
const total = listaNumeros.reduce(getSuma,0)
function getSuma(total,num){
    return total + Math.round(num);// redondear el num

}
console.log(total);// 24

const listaProductos = [
    {nombre: "Producto1", precio:10},
     {nombre: "Producto2", precio:20},
      {nombre: "Producto3", precio:30},
       {nombre: "Producto4", precio:40}
]

const precioTotal = listaProductos.reduce((sumTotal,producto)=>sumTotal + ,0)// , 0 valor inicial
```

## SEARCHPARAMS vs PATHNAME

#... => scroll hasta esa parte 

https://cei.es/alumnos/examenes/index.html?userId0=4&year=2025#contacto
-----                  -------------------? -----------------------------
protoc                  pathName(rutas)      ?seachParams(variables de busqueda divididas con `&'arrastra el html al id ) variable & variable= valor & variable=valor & ...


### URL SearchParams
MEtodo para trabajar con los param de consulta de una URL (query parameters), aparecen despues de ? 

- Lee y manipula los params de la URL
- Es util para manejar datos dinamicos en nuestra app y compartir el link a otros usuarios


```jsx

// obtener un query param de la URL "pagina.html?page=about"
                                                ------
const params = new URLSearchParams(window.location.search)// obtenemos la parte del search de param
const pagina = params.get('page') || "home";// utilizo home por defecto en caso de que page no exitsa

```
### PAthNAme

ES una propiedad de la interfaz window.location que representa la ruta de la URL, la parte de la URL que viene despues de dominio y antes de los parametros de search params (?)

Caracteristicas:
- No incluye ni os SearchParams ni el fragemnto de Hash(#)
- REpresenta la ruta de la URL
- Se utiliza para manejar la navegacion en una aplicacion de SPA ( Single Page Aplication)


```jsx
//    /examenes/index.html?
const pathValue = window.location.pathname.slice(1) || "home";
// quita l primer caracter ( / ) y si no la encuentra  devuelve home

```






# Sitio Multipagina

Realiza un sitio multi-page cambiar el componente que se renderiza dependiendo del valor   del useState "paginaActual"
- Usar botones para cambiar el state y muestra un componente u otro 
- Actualiza el codigo para utilizar SearPages para mostrar un componenete u otro usando links para cambiar de una a otra 

secciones: Home COnstacto Nosotros Producto



