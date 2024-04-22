# Software revision

## Resumen ejecutivo

La intención de este documento es proporcionar una visión general y detallada del proyecto AparKing, para su correcta revisión y análisis de calidad. Se explican los casos de uso core desarrollados hasta el momento con el fin de facilitar la navegabilidad para un nuevo usuario, en este caso quien pruebe nuestra aplicación. Finalmente se aportan los enlaces requeridos, como la Landing Page del proyecto, el enlace de GitHub, de Clockify así como el propio desplieque de la aplicación. 



## Casos de uso core

### Registro / Inicio de sesión

En primer lugar, los usuarios podrán iniciar sesión o registrarse en función de si ya tienen una cuenta de AparKing o no. Si se registran por primera vez introducirán su nombre, apellidos, email y contraseña, entre otros datos. Y si ya tienen una cuenta de AparKing simplemente tendrán que introducir su email y contraseña. Al registrarse en el sistema el usuario recibirá un código para confirmar la creación de su cuenta.

![Pantalla de inicio](/img/start.png)

### Mapa interactivo

A continuación, la página principal mostrará un mapa interactivo donde los usuarios podrán observar donde hay aparcamientos disponibles y donde están. Aquí podemos ver el resultado final de la implementación del mapa en tiempo real, junto con el botón para notificar los aparcamientos. Además, una vez localizado el aparcamiento desde el mapa, podrás seleccionarlo y te ayudaremos a llegar al sito a través de google maps.

![Mapa interactivo](/img/interactive-map.png)

### Alquileres

#### Lista de garajes
Estará disponible la lista de los distintos aparcamientos privados para alquilar con sus detalles y fechas disponibles. Se dispone de un filtro para agilizar la búsqueda.

![Sección alquileres](/img/rental-page.png)

#### Reservar un garaje
Podrá acceder a la reserva de un garaje y definir el método de pago y el periodo de tiempo que se desea reservar la plaza.

![Formulario reserva](/img/rental-form.png)

#### Lista de mis reservas
También podrá consultar sus reservas en cualquier momento. Además, cuenta con la posibilidad de borrarlas.

![Mis reservas](/img/my-rentals.png)

#### Publicar mi garaje
Por último, podrá añadir su propio aparcamiento para alquilarlo en la aplicación, introduciendo título, dirección, descripción, disponibilidad, altura máxima, precio y fotos del aparcamiento. Estos datos se podrán actualizar en cualquier momento por el dueño del aparcamiento.

![Formulario garajes](/img/garage-form.png)

## Datos necesarios

Todos los datos necesarios para realizar el análisis de la aplicación se encuentran en la Landing Page oficial de AparKing [Landing page](https://aparking-144153767.hubspotpagebuilder.eu/aparking) En esta se podrán visitar los Mockups de la aplicación por el botón “Mockups” y también estará enlazado con el GitHub de la organización AparKing por medio del botón “Visit Us”. Esta organización consta de tres repositorios, uno para el backend de AparKing, otro para el frontend y un último para la base de conocimiento Común de Docusaurus. Además, existe una sección dedicada a cada uno de los Sprints para que los usuarios piloto encuentren rápidamente la aplicación desplegada por cada sprint. Esta sección tiene un botón con la versión desplegada de cada sprint “Sprint X” y justo debajo un botón donde podrán rellenar una encuesta de feedback sobre la experiencia probando la aplicación.

Finalmente, se expone todos los enlaces ya mencionados para dejarlos más accesible:

- URL Despliegue Backend: [Aparking APP Back](http://34.175.243.212:3000/)
- URL Despliegue Frontend: [Aparking APP Front](http://34.175.60.124:8180/)
- URL GitHub: [Aparking Github](https://github.com/Aparking)
  - Backend: [Backend aparking](https://github.com/Aparking/AparKing_Backend)
  - Frontend: [Frontend aparking](https://github.com/Aparking/AparKing_Frontend)
  - Base del conocimiento: [Base de conocimiento Aparking](https://github.com/Aparking/BaseConocimiento)
- URL Clockify: [Clockify](https://app.clockify.me/shared/65e4d112997a62586a5562e2)

`Cabe destacar que las credenciales necesarias para probar la app serán enviadas tanto a los usuarios piloto como al profesor que nos evalúe con el fin de mantener la privacidad y seguridad del proyecto. Además, se recomienda a los testers que usen la versión de móviles, pues es a la que se le ha dedicado la mayor parte del diseño. Por último, se recuerda que el servicio de ubicación debe de estar activo al momento de probar la aplicación.`
