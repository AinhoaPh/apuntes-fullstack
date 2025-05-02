## Deconstruccion de objetos 

- Podemos extraer los datos de un objeto creando sus variables indiividuales.
- Podemos renombrar una de las variables utilizando :
- Podemos asiganr un valor por defecto utilizanod la nomnclartura : `nombreVariable = "valor por defecto"` 
```js 
const numero 66;
const persona = {
    nombre: "",
    apellido:"",
    edad: ,
    direccion: {
        calle: "",
        numero:
    }
}

console.log(persona.direccion.calle);

// deconstruccion de objetos 

const { nombre, apellido, edad, direccion, hobbies="no tiene"}= persona;// porque no esta definida se da un valor por defecto
const {calle, numero:numeroCalle} = direccion;
console.log(direccion.calle);
```


## Deconstruccion de Listas 
- Es importante tener en cuenta la cantidad de items de mi lista y el orden de los mismos ya que las listas utlizan el indicie/posicion
- Podemos asignar un valor por defecto usando la nomenclatura `miVariable = "valor por defect"`

```js
const lista = ["item1", "item2", "itme3"]
//Deconstr


const [uno,tres, cuatro="item 4"]= lista // const [ uno, , tres] = lista para dejar un espacio y no liar y el tres ya es item 3, y al cuatro se le esta dando ese valor por defecto

console.log(tres)//item 2
console.log(cuatro);//item 4


```

# REACT !
## Ventajas:

- Podemos crear etiqyetas HTML personalizadas (componentes) para reutilizarlas.
- Manejo simple del estadi de nuestra App (`useState`) en que estado esta nuetsra app (HOOK) y actualiza automaticamente nuestro DOM gracias al uso de un "VirtualDOM"
- Uso de .JSX que nos permite interpolar HTML y JS(similar a template strings``)

## A tener en cuenta
- Todos los componenete son funciones que se escriben en mayusuclas
- Todas las funciones deben de tener un return
- Props: Enviar info a los componentes mediante el uso de props como `children`



const numero = 5;
numero ++; /**
 
<div id="numero">5</div>


Vite es un CLI que nos permitita crear proyecto de JS . Soporta multiples librerias (REact, Lit, Preact..)
"create-react-app"

```bash
npm create vite@latest
```
creacion de un alias para poder importar y exportar componentes con @ sustituye el ./
Los componenetes tienen que empezar en minuscula funcion de componente 

En vite.confing
 - src-> 
 - public-> se alamacena el contenid estatico que no voy a modificar y - - esto va a estra en el directorio raiz de nuetsra pag web
 - jsx-> HTML + JS solo se puede devolver HTML en este tipo de arch
 - <>->Fragmento Para meter dentro muchas etiquetas
 - {}-> interpolacion = que ${} si se declaran funciones luego se pueden llamar pero logica no
 - ({})-> deconstruir en tiempo real sin tener que nombrarla.



```js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Agregar alias @ para la carpeta src
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})


```