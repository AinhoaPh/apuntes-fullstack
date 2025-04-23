# Apuntes dia 1

- [x] Documentacion de CEI
- [x] Ejemplo de Markdown
- [x] Ver terminal

## Terminal

Es una herramienta que nos permite mediante comands (CLI) interactuar con nuestro sistema operativo(WIN, MAC, LINUX)

## Comandos en la terminal 

```bash
cd nombre-carpeta # Entrar a la carpeta llamada "nombre-carpeta" cd= change directoty
cd ../.. # sube dos carpetas 
cd .. # sube una carpeta 
cd / # me lleva a la raiz de mi sistema operativo
cd C: # me lleva a la raíz del disco C:/
cd "Mi Carpeta" # me lleva a mi carpeta
cd . # mi ubicacion actual

# crear nuevo archivo
touch nombre-archivo.txt

# crear una carpeta
mkdir nombre-carpeta # crear carpeta
rmdir nombre-carpeta # eliminar carpeta
rm -rf nombre # elimna un acarpeta y su contenido 

clear # limpia terminal

ctrl + C #Cortar un proceso

 counter=0
 while true; do
 counter=$((counter+1))
 echo "Proceso $counter...."
 done
```