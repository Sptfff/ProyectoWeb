# ProyectoWeb
-link repositorio github: https://github.com/Sptfff/ProyectoWeb

### La carpeta 'otros' contiene la mención de los patrones de diseño y el modelo relacional de la BD que utilizaremos.
En la próxima entrega, pretendemos trabajar con:
- El SGBD 'My SQL'.
- El framework de backend Express con JavaScript
- link prototipo: [https://www.figma.com/file/2xNuZfibpFdbDQ9VtaBqgB/Untitled?type=design&node-id=0%3A1&mode=design&t=0oEfFEiT1xFCTeIb-1](https://www.figma.com/proto/2xNuZfibpFdbDQ9VtaBqgB/Untitled?type=design&node-id=1-11&t=eNI4Gmx6vYweMt8D-1&scaling=scale-down&page-id=0%3A1&mode=design)
  
## Integrantes:
- Cristofer Contreras
- Luciano Cubillos
- Vicente Montiel
- Matías Romero

## Descripción
* Nuestro proyecto consta de una aplicación web, que puede ayudar al cuidado de la salud y la alimentación (TEMA 1 Escogido).
* Esta sirve para que el usuario tenga un control en los alimentos que consume en su día a día, teniendo presente las calorías y macro nutrientes de cada alimento.
* La aplicación dispondría de una sugerencia de calorías y macro nutrientes a consumir en el día de manera personalizada para el usuario, con distintos factores como sus medidas físicas, nivel de actividad física y objetivo nutricional. 

## Funcionalidades
La aplicación dispone de las siguientes funcionalidades:
- Iniciar sesión de usuario // cerrar sesión
- Registrar usuario nuevo
- Editar el perfil de usuario: ingresar medidas y opciones del usuario para personalizar las sugerencias nutricionales de la app
- Página de Inicio que tenga contadores de las sugerencias nutricionales
- Añadir alimento consumido por el usuario
- Editar los alimentos ingresados
- Buscar alimentos disponibles en la app
- Ver datos de la cuenta
- Elegir alimentos dependiendo del horario de la comida (desayuno, almuerzo y cena)
- Sobre Nosotros: Pequeña descripción sobre los desarrolladores de la apps

## Pasos para Ejecutar el Proyecto
1. Abrir el repositorio: https://github.com/Sptfff/ProyectoWeb.
2. Dar click en 'code' y luego copiar el URL del proyecto para clonarlo en su dispositivo.
3. Abrir Git Bash y clonar el repositorio utilizando el siguiente: 'git clone https://github.com/Sptfff/ProyectoWeb.git'.
4. Instalar y/o abrir VSCode.
5. Abrir el proyecto ProyectoWeb en VSCode.
6. Abrir terminal <cmd>.
7. Entrar en la terminal a la carpeta de frontend (comando: cd frontend).
8. Escribir en la terminal el comando de ionic: ionic serve.
9. Instalar paquetes recomendados en la terminal (Vite) y la dependencia axios.
10. Se abrirá la página de inicio en tu navegador y podrás navegarla.
11. Para revisar la base de datos, entrar en la terminal a la carpeta de backend (comando: cd backend).
12. Instalar las siguientes dependencias: express, mysql, cors, bcrypt y jsonwebtoken.
13. Instalar y/o abrir MySQL Workbench.
14. Copiar la base de datos que está en el proyecto (bd.sql) en MySQL Workbench.
15. Cambiar user y password en el archivo database.js como lo tengas en tu MySQL.
16. Ingresar el comando node src/app.js en el backend para visualizar la base de datos.
17. Podemos ver la base de datos desde la página web con localhost:3000/users o usar insomnia para revisar las consultas como eliminar, editar, agregar o ver los datos. 

## Consideraciones en la ejecución del proyecto
1. Puedes recorrer las páginas sin haberte registrado
2. Al editar tu perfil, tendrás que seleccionar desde 0 todas tus opciones
   
