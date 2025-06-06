# Base de datos

Sistema par almacenar informacion de manera organizada

- Organiza la info
- Acceder a la info de manera eficiente 
- Integridad de la info aplicando reglas y restricciones(el dato no se corrompe)
- Seguridad mediante roles y permisos
- Escalabilidad de la info para soportar crecimiento

# SQL vs NoSQL

SQL-> Structured Query Languages : MySQL, MariaDB, PostgresSQL, SQLite,Oracle, SQL SErver
NoSQL-> MongoDB, CouchDB, Redis( acaba de ser openSource), Cassandra, Firebase(AWS)

Las sQL se utlizan en base de datos (DB) que requierab transaccionees y relaciones:(claro y relaciones entretablas y facil de gestioanr)
- Un CMS (COntent Mnagment System) Wordpress
- Sistemas de contabilidad: Quickbooks
- Sistemas de inventarios: SAP
- Sist de Facturacion: Facturasscripts
- Sist de RR hh: SAP
- Sist gestion multiproposito: Tango Gestion

Las NoSQL se prefieren en casos que requeiran alto rendimiento y gran escalabilidad:(funciona en multiples ordenadores a la vez)
-  Sistema de geolocalizacion. Google MAps..
- Sist de recomendaciones: Netflix, Disney+..
- Sist de analisis de datos ( Google Analyrics)
- Mensajeria ( Telegram, Whap)

![SQL vs NoSQL](https://webimages.mongodb.com/_com_assets/cms/lxc46wut9ecxn9dko-Data-modeling-example.svg)

# MySQL vs MongoDB

| Mysql              | Mongo DB            |
|--------------------|---------------------|
| Tablas             | Coleccions          |
| Fila/Registrp      | Documentos          |
| Columna            | Campos (caract)     |
| Esquema Rigido     | Esquema Felxible    |
| JOIN por relacions | Referencia Emdebida |


# Mongo DB

- Es mas flexible y ademas no requiere que complete todos los datos.
- No tenemos que crear un ID se crea automaticamnete
- ID incluye info del documento( fecha en la que se creo..)
- Las colecciones son Arrays (listas de docuemntos)
- Los documentos son objetos que posseen multiples campos
- Tienen un esquema similar a los objetos JSON pero en realidad son BSON -> Binary JSon


Se puede utilizar desde:
-  la terminal 
- Mongo Shell/Mongosh(terminales de mongo)
- Mongo DB Compass GUI (Interfaz grafica ver base de datos)
- Mongoose: es una biblioteca de modelado de objetos para MongoDB



