# NODE.js

Es un entorno de ejecución de JS multiplataforma, es de codigo abierto y gratuito, y nos permite crear servidores, aplcaiones web, y herramientas de lineas de comando y scripts.

Sitio oficial [NODE](https://nodejs.org/)

Para ver si esta instalado `node -v`

# NPM  (Node Package Manager)

Es un gestor de paquete o  modulo. Los pauqtees son  porciones de codigo que sepuden instalar en nuetsros proyectos. Ejemplo:
`express`, `axios`, `nodemosn`, `chalck`, `moment`

Hay otro gestor de paquetes ademas de NPM, como PNPM, BUN; NPM por defecto viene con Node

Sitio oficial de [npm](https://npmjs.com)

Probemos instalar un pauqtee con el siguiente ejem

```bash
npm i cowsay -g
```

desinstalar:

```bash
npm  uninstall i cowsay -g
```

instalamos cowsay nuevamente de forma local ( a nivel de proyecto)

```bash
npm i cowsay -g
```

cd y arrastras carpeta para movernos por la carpeta  y para salir cntrl + c 

```bash
npm i nombre-paquete # instalar n paquete en la carpeta noe_modules
npm i nombre-paquete -g # instalar un paqute en el ordenador (global)
npm i nombre-paquete@latest # instalar la última version dipsonible 
npm i nombre-paquete@2.3.1 -E # E de version exacta y no actualizarla
npm  update # actualizar paquetes a la ultima version
npm  update nombre-paquete

```

Package.json

```json

//sistema de versionado
{
    "dependencies": {
        "nombre-paquete": "^1.2.0",  // Actualizable a la 1.X.Y version 
        "nombre-paquete": "~1.2.0",  // Actualizable a la 1.2.X version
        "nombre-paquete": "1.2.0",  // EXACTA
        "nombre-paquete": ">1.2.0",  // todas las versiones mayores a 1.2.0
        "nombre-paquete": "<1.2.0"  // todas las versiones menores a 1.2.0
    }
}
```

Para ver una lista de paquetes instalados de manera global usamos `npm list -g --depth=0`
Para desinstalar un paquete usamos:

```bash
# Para paquetes Locales
npm uninstall nombre-paquete

# Para paquetes globales
npm uninstall nombre-paquete --global
```