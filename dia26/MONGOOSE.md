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

# Metodos para actualizar(update)

```js
//Actualiar por ID y obtener el documento actualizado
const updatedItem = Modelo.findByIdAndUpDate(id, {campo:valor, campo2:valor2}, {new:true})

// Actualizar im dpcuemnto que cumpla un criterio
Modelo.updateOne({campo:valor},{$set: {campo : "nuevoValor"}})

// Actualizar varios modelos
// filtro: { name: RegExp("PaTRicia", "i") }
Modelo.updateMany({campo:valor}, {$set:{campo: "nuevoValor"}})
```

## Metodos para eliminar 
```js
//Eliminar por id
Modelo.findByIdAndDelete(id)

// Eliminar el que cumpla un criterio
Modelo.deleteOne({campo: valor}

// Eliminar varios
Modelo.deleteMany({campo:valor})
)
```

## MONGOOSE parte 2

### OPERADORES comunes en filtros

```js
await Usuario.find({edad:{$gt:18}})


await Usuario.updateMany({edad:{$exists:false}},{$set:{"edad:17"}})
/*
$eq: igual
$ne: no es igual
$gt: mayor
$gte: mayor o ugual
$lt: menor
$lte: menor o igual
$in: dentro del array
$nin: no esta dentro del array
$and: Y logico( se cumplen todas las opciones)
$or: 0logico ( se cumplen algunas de las opciones)
*/


// busqiedas avanzadas
try{
    const ej1= await Usuario.find({edad: {$in:[25,30,35]}})// si esta en estas edades
    const ej2= await Usuario.find({edad: {$nin:[25,30,35]}})// no esta en estas edades

    const ejAnd = await Usuario.find({
        // opcions que se tienen que cumplir
        $and:[
        {edad:{$gt:21}},
        {nombre:'Blue'}
        ]
    });
        const ejOr = await Usuario.find({
        //alguna opcions que se tienen que cumplir
        $or:[
        {edad:{$gt:21}},
        {nombre:'Blue'}
        ]
    });

    
}catch(error){
    Next(error)
}
```

## Opciones utiles

```js

// para actualizaciones

{new:true}// devuelve el documento actualizado
{upsert: true} // (Upsdate + Insert)crea el elemnto si no existe "SAVE

// para consultas
.select('campo1 campo2')// selecionamos campos expecificos que queremso mostrar es (util para devolver la clave )
.limit(10)              // limite de resultados     -se usa para paginacion
.skip(5)                // saltear resultados (5)   -se usa para paginacion
.sort({campo1: 1})      // ordenar resultad( 1: ascendente, -1: descendente)

// EJ
// TRAE: nombre y edad limit de 10 se salta los primeros 5 y la edad de orden descendente
const Usuarios = await Usuario.find().select('name edad').limit(10).skip(5).sort({edad:-1};)


```

Nota: 
En Mongoose, cuando utilizamos metodos como findById, findByIdUpdate, findByIdAndDelete, etc el parametro ed se rfiere "_id"

```js
const id= '1234'
Usuario.findbyIdAndUpdate(id, {nombre:"nuevo nombre"},{new:true})
Usuario.updateOne({_id_id},{nombre:"nuevoNombre"})


```

# Relaciones entre modelos

### One-to-Many (uno a muchos)

 Un documento puede estar relacionado con multiples documentos de otra coleccion
    Ej:
- Un usuario puede tener muchos productos []
- Y a su vez un producto puede tener un unico dueño 


```js
    // prioduct model
    const productSchema = new mongoose.Schema({
        nombre: String,
        precio: Number,
        owner: {type: mongoose.Schema.Types.ObjectId, ref:'Usuario'}// usuario dueño mediante suid 
    })
    export const Producto = mongoose.model("Producto", productoSchema)

// user model
const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    productos: [  { type: mongoose.Schema.Types.ObjectId, ref:'Producto'}]// array de ids obtener el id del producto ej:[25,33,45..]
})
  export const Usuario = mongoose.model("Usuario", usuarioSchema)
```

## Usando populate() en nuetsro Queries

Nos permite "poblar" las referecias con los datos reales 

```js
// poblar una referencia simple
const productos = await Productos.find().populate("owner");


```

```js
//controller crar producto
const producto = await 

```