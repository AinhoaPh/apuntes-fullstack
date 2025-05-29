import{PORT,DOMAIN} from './config/config'

const express= require('express')



    const app= express();
    // loque me llega del servidor y lo que respondo
    app.get("/", (req,res)=>{
        res.send("Bienvenidos al Backend")
    });

    const PORT = 3000

    app.listen(PORT, ()=>{
        cosnole.log(`Servidor ejecutandose em puerto${DOMAIN}:${PORT}`)
    }) 


        //Back end primera forma
    // app.get("/contacto", (req,res)=>{
    //     res.setHeader('Content-Type', "text/application/json")
    //     res.send({"nombre":"maria"})
    // });
    // app.get("/saludar/alumno",(rep,res)=>{
    //     res.send("hola estas en saludar Alumno")
    // })

    // app.listen(3000, ()=>{
    //     console.log(`Servidor corriendo en puerto http://localhost:3000`);});
    

   