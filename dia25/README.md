# 🌐 Ruta Catch-All en Express

Este proyecto incluye una implementación de una **ruta catch-all** (también llamada ruta comodín o atrapadora) en un servidor Express. Su objetivo es capturar cualquier solicitud HTTP que no coincida con las rutas definidas previamente y devolver un error controlado (por ejemplo, 404).

---

## ✅ ¿Qué es una ruta catch-all?

Una ruta **catch-all** se coloca al final de todas las rutas y sirve para capturar:

- Rutas inexistentes
- Peticiones mal escritas
- Accesos erróneos en la API

Ejemplo:
```js
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});
```

```js
app.get("*",(req, res) => {
  res.json({ 
    status:"error",
    code: 404,
    error: "Pagina no enocntrada"
  });
  next()
});
```

## middleware de manejo de errores

```js
try{
    // intento 
}catch(error){
    next(error)// lista de middl y reciva un error ocmo primer parametro 
}

```


