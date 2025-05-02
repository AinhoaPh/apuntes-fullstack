# Package.json

 String, no pueden tener funciones . Es un archivo que contiene información de nuestro proyecto incluyendo los paqutes de entorno de produccion y de desarrollo. Dependecias son scripts con librerias  Contiene Scripts y descripción genral. Se puede utilizar el comando `npm init`o `npm init -y` ( le va a decir que si a todo ) para crear un archivo con valores predeterminados. 

 Scripts son comandos para iniciar en la terminal. Node modules se administra por npm

 Dependencias: Son las libreria y modulos que tuproyecto necesita para funcionar. Se les llama dependencias de producción.

 Dependencias de Desarrollo: Se instalas bajo lalisra de "devDependencias" y son modulos nevesarios que solo se utilizan durante ek desarrollo de nuestro sistea y no en produccion.

 Por ejmplo "nodemon" es una dependencia de desarrollo y se instala usando:
 `nom i nodemon -D`

 Para exportar modulos externos necesitas type:

 Permite tener proyectos diferentes con su estructura de archivos

 ## CommonJS vs ES6 Modules

 CommonJS es el sistema que utiliza Node por defecto para instalar modulos. Se exportan utilizando `module.exports` y se importan usando `require`.
 Ver ejemplo en "commonJs"

 ES6 Modules es el sistema de modulos que utilizan los Navegadores para exportar librerias entre archivos utiliza Node( con la configuración adecuada). Los Módulos se definen con "export" y se importan por "import"

 En general Es6 se considera mejor opción ya que :

- es el str¡andrar oficial de JavaScript
- Ofrece mejor rendimiento y optimización
- Tiene una sintaxis mas clara y flexible+- Funciona tant en navegadores como en servidores Node.js
- CommonJs trabaja de manera sincrona y ES6 es asíncrona.
para usarlo en NOde.ja debemos agregar a nuestrp àckage.json `"type" : "module"`

## Para crear un proyecto desde 0

1. Creamos una carpeta para nuetsro proyecto
2. Entramos a esa carpeta ( pueden arrastrar desde el explorador)
3. Creamos nuestro package.json utilizando `npm init -y`
4. Instalamos dependencias de desarrollo  como nodemon: `npm i nodemon -D`
5. Instalamados dependencias de produccion
6. Definimos lo script para nuetso proyecto en package.json: `"start": "node index.js`o `"dev": "nodemon index.js"`
7. Agregamos el "type": "modele" para utilizar ES6.
8. Creamos nuestros index.js
9. Ejecutamos nuestros script utilizando`npm run dev`
10. Finalizamos el script con Control + C


1. Buscar en la web de NPM la libreria qrcode-terminal
2. Crear un proyecto que muetsre por el terminal un QR que me muetsre el codigo "Bievendios a Full Stack" y otro QR mas pequeño que me lleve a la web de "https://cei.es"


# Repaso de funciones
```js
// Funcion clasica
function miFuncion(parametro){
    return "valor";
}

//Funcion asignada a una variable
const miFuncion = function (parametro){
    return "valor";
}
 // Funcion flecha
 const miFuncion = (parametro) =>{
    return "valor";
}

// funcion flecha simpli
const miFuncion = parametro => "valor";

//otro ejemplo
const suma =(num1,num2)=> num1+num2; // lo que esta detro del parentesis es un parametro
suma(5,3);// lo de dentro de los parentesis son argumentos

/*Funcion de CallBack!  espara que llame a la funcion mas tarde, mandar una subfuncion a ejecutar cuando se quiera, es muy util para crear codigo asincrono */
miFuncion(suma); //funcion commo argumento de un parametro
suma(5, miFuncion);// esta mandando una funcion 

miNodoHTML.addEventListener("click", function ()=Z{
    console.log("Me hicieron click");
})
```
