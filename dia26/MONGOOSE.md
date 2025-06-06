# Mongoose CRUD CheatSheet

## Metodos de lectura

```js
// encontrar multiples doccumentos
Modelo.find();

// encontrar uno por ID
Modelo.findById(id)

// encontrar uno que cumpla cierto criterio
Modelo.findOne({campo: valor, campo2:valor2 }) // devuelve el primero qeu encuentra

// encontrar multiple que cumplan cierto criterio
Modelo.find({edad: {$gte:18}})// busca mayores de 18 $gt-> greater than....

```


## Metodos de creacion

```js

// v1: save()
const miUsuario = new Usuario({
    nombre:"lucas",
    email:"lucas@gmail.com"
});
miUsuario.save();

//v2: create()
Modelo.create({
    campo:valor,
    campo2:valor2
});

// Crear multiples documentos a la vez para los carritos por ejemplo
Modelo.insertMany([
    {
        campo:valor,
        campo2:valor2
    }, {
        campo:valor,
        campo2:valor2
    }, {
        campo:valor,
        campo2:valor2
    }
])



```