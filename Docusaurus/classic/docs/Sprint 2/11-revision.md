# Software revision

## Resumen ejecutivo

La intención de este documento es proporcionar una visión general y detallada del proyecto AparKing, para su correcta revisión y análisis de calidad. Se detalla la funcionalidad principal de la aplicación, que permite a los usuarios encontrar aparcamientos disponibles para alquilar y ofrecer los suyos propios, mediante una interfaz que incluye un mapa interactivo y listados de aparcamientos. Además, se proporciona información sobre cómo acceder a los datos necesarios para el análisis de la aplicación, los mockups y la versión desplegada para cada sprint, junto con un mecanismo para recoger el feedback de los usuarios. Por último, se identifican los tipos de errores que los usuarios deben reportar durante el uso de la aplicación, abarcando desde errores HTTP hasta problemas de seguridad y disponibilidad del sistema, subrayando la importancia de estos reportes para la mejora continua del proyecto.

## Usos core

En primer lugar, los usuarios podrán iniciar sesión o registrarse en función de si ya tienen una cuenta de AparKing o no. Si se registran por primera vez introducirán su nombre, apellidos, email y contraseña. Y si ya tienen una cuenta de AparKing simplemente tendrán que introducir su email y contraseña.

![Pantalla de inicio](/img/Pantalla-inicio.png)

Aquí podemos ver el resultado final de la implementación del registro y login.

![Pantalla de inicio real](/img/Pantalla-login.png)

A continuación, la página principal mostrará un mapa interactivo donde los usuarios podrán observar donde hay aparcamientos disponibles y donde están. Aquí podemos ver el resultado final de la implementación del mapa en tiempo real, junto con el botón para notificar los aparcamientos. Además, una vez localizado el aparcamiento desde el mapa, podrás seleccionarlo y te ayudaremos a llegar al sito a través de google maps.

![Mapa aparcamientos](/img/mapa.png)

También estará disponible la lista de los distintos aparcamientos privados para alquilar con sus
detalles y fechas disponibles.

![Mapa aparcamientos](/img/garajes.png)

Y finalmente podrá añadir su propio aparcamiento para alquilarlo en la aplicación, introduciendo título, dirección, descripción, disponibilidad, altura máxima, precio y fotos del aparcamiento.
Obviamente estos datos se podrán actualizar en cualquier momento por el dueño del aparcamiento.

![Mapa aparcamientos](/img/crear-garajes.png)

## Datos necesarios

Todos los datos necesarios para realizar el análisis de la aplicación se encuentran en la Landing Page oficial de AparKing [Landing page](https://aparking-144153767.hubspotpagebuilder.eu/aparking) En esta se podrán visitar los Mockups de la aplicación por el botón “Mockups” y también estará enlazado con el GitHub de la organización AparKing por medio del botón “Visit Us”, esta organización consta de tres repositorios, uno para el backend de AparKing, otro para el frontend y un último para la base de conocimiento Común de Docusaurus. Además, existe una sección dedicada a cada uno de los Sprints para que los usuarios piloto encuentren rápidamente la aplicación desplegada por cada sprint. Esta sección tiene un botón con la versión desplegada de cada sprint “Sprint X” y justo debajo un botón donde podrán rellenar una encuesta de feedback sobre la experiencia probando la aplicación.

Finalmente, se expone todos los enlaces ya mencionados para dejarlos más accesible:

- URL Despliegue: [Aparking APP](https://aparking-frontend.vercel.app/)
- URL GitHub: [Aparking Github](https://github.com/Aparking)
  - Backend: [Backend aparking](https://github.com/Aparking/AparKing_Backend)
  - Frontend: [Frontend aparking](https://github.com/Aparking/AparKing_Frontend)
  - Base del conocimiento: [Base de conocimiento Aparking](https://github.com/Aparking/BaseConocimiento)
- URL Clockify: [Clockify Sprint 2](https://app.clockify.me/shared/662943c7bd66e43d94a69154)

Las credenciales necesarias para probar la aplicación correctamente han sido enviadas al profesor que evalúa nuestro proyecto, con el fin de mantener la privacidad y seguridad de nuestro sistema.
