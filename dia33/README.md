
![proceso de auth](https://hassansaleh.ams3.cdn.digitaloceanspaces.com/express-user-authentication/Passport-Explanation.png)

- Autenticado: verificado la identidad del usuario con un login.( Quien eres?)
- Autorizacion: A que recursos puedo acceder y que permisos tengo para cada uno ( Que puedo hacer? si le doy permiso o no ) CRUD con autorizaciones da permisos. ( perfiles de Admin usuario o invitado)
- Usuario / inivitado


## JWT (JSON Web Token )
- Sitio:https://jwt.io
- TOken string compacto y autocontenido para transmitir info de forma segura.( el token no esta encriptado no enviar info sensible)
- Header: Algoritmo de firma y tippo de token
- Payload: Datos del user como id, rol, y espiracion
- Signature: Garantia de que el token no ha sido modificado


## Hash vs Crypt/ Decrypt

- Crypt/Decrypt: Guardar y dificil de ver

1) Cambiar letras por numeros 
2) y letras por numeros parceidos

70M45-> Tomas
Se puede volver para atras 
- Hash:
Es unidireccional . Genera una huella digital electronica para verificacion de datos. 
No se peden volver a atras a la orifginal. Las claves no se pueden devolver sino te da opcion a cambiarlas

Tomas->KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
Tomas->eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0

Comparar dos hash para ver sia mbas coinciden 

KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30 == eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0


## Almacenamiento del token

- Localstorage: Almacenamiento persistente ene l navegador( recargo y lo puedo seguior leyendo ) y si lo elimino de localstorage lo elimino peromientrass se guarda ahi.
    V: Es facil de implemnetar y permanece despues de cerrar el navegador.  
    I: Pero eso le hace vulnerable a los ataque XSS.
- Cookies: Datos enviados con cada peticion de dominio 
    V: Puede ser config. con el flag`HttpsSOnline`( No la puede leer JS)
    I: Limite de 4KB, y vulnerable alos ataques CSRF( otra pag que se hace pasar por nosotros)


## Flujo de Autentificacion
1) EL usuario envia las credenciales de LogIn
2) El servidor valida los datos y crea un TOKEN JWT y se la dvuelve al cliente
3) EL cliente recibe los datos y guarda el Token y Localstorage
4) El cliente incluye el token en cada peticion Fetch de nuetsras rutas protegidas.( algunas que solo pueden acceder estan o no autenticado)
5) Servidor va a verificar el token antes de procesar la peticion de dicha ruta.


## Diferencia entre Sesiones vs uso de Token ( servidor )

- `Token`: No posee un estado, toda la info necearia para manejar los permisos se encuetra dentro del token. JWT
- `Sesiones`: El estado se guarda ene l sevidor y se usan cookies con id de sesion. Se utilizan en PHP

Tomi hace Login ;( deja un archivo sobre cada una de las sesiones )

Tomi.cookie{
    id: 1212443,
    user: tomi, 
    login:214235435
}

blue.cookie{
    id: 124234235,
    user: blue, 
    login:21423554645435
}


## Seguridad

- XSS ( Cross-Site-Scripting): inyeccion de codigo malicioso que puede robar el token de LocalStorage de otros sitios. introduce codigo en algun sitio devolviendo codigo e intentando acceder a el 
- CSRF( Cross-Site-Request-Forgery) Ejecuta acciones no autorizadas aprovechando la sesion activa de un usuario. Duplica la pag para iniciar sesion
- Flags: HttpsOnly: Flag para cookies para evitar acceso desde JS
- Flag: SameSite: Restricciones para enviar cookies solo a sitios del mismo dominio  

## Expiracion de Token y Refresh

- Los token JWT deben tener un tiempo de expiracion corto (15-60min)
- Refresh token: Token de Larga duracion para obetenr nuevos token de acceso sin hacer un nuevo login (3-7dias)
