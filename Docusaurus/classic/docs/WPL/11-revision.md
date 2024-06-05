# Revisión de Software

## **APARKING - WPL**
![alt text](/img/SR-WPL/logoAparkingSR.svg)
### **+ GRUPO 11 +**

### **ÍNDICE DE CONTENIDOS**

[**RESUMEN EJECUTIVO**](#resumen-ejecutivo)

[**INTRODUCCIÓN**](#introducción)

[**CONSIDERACIONES**](#consideraciones)

[**CASO 1: REGISTRO, INICIO Y CIERRE DE SESIÓN**](#caso-1-registro-inicio-y-cierre-de-sesión)

[**CASO 2: MAPA INTERACTIVO**](#caso-2-mapa-interactivo)

[**CASO 3: ALQUILERES**](#caso-3-alquileres)

[**CASO 4: PERFIL**](#caso-4-perfil)

[**CASO 5: CESIONES**](#caso-5-cesiones)

[**CASO 6: PLANES**](#caso-6-planes)

## **RESUMEN EJECUTIVO**

Este documento es una guía que describe las diferentes funcionalidades de la aplicación Aparking. 

## **INTRODUCCIÓN**

Este informe ofrece una exhaustiva visión del proyecto AparKing, diseñado para agilizar su revisión y evaluación de excelencia. Detalla los principales casos de uso implementados, con el propósito de enriquecer la experiencia del usuario, e incluye enlaces esenciales como la página principal del proyecto, GitHub, Clockify y el despliegue de la aplicación.

En primer lugar, la landing page de Aparking se encuentra en la URL:

- [Landing page](https://aparking-144153767.hubspotpagebuilder.eu/aparking)

El GitHub de la organización del equipo de trabajo se encuentra en la siguiente URL:

- **URL GitHub:** [Aparking Github](https://github.com/Aparking)
  - Backend: [Backend Aparking](https://github.com/Aparking/AparKing_Backend)
  - Frontend: [Frontend Aparking](https://github.com/Aparking/AparKing_Frontend)
  - Base del conocimiento: [Base de conocimiento Aparking](https://github.com/Aparking/BaseConocimiento)

La herramienta para registrar las horas de cada uno de los miembros es
Clockify, para distinguir el trabajo de cada uno puede acceder a la URL:

- [Clockify grupal](https://app.clockify.me/shared/664bc5f749f5bd3c4501d0ad)

Por último, cuenta con el despliegue de la aplicación en el siguiente enlace:

- [Aparking](https://aparking-ionic.vercel.app/)

## **CONSIDERACIONES**
- Es esencial destacar que las credenciales necesarias para probar la aplicación serán proporcionadas exclusivamente a los usuarios piloto y al profesorado evaluador, con el fin de salvaguardar la privacidad y la seguridad del proyecto. 
- Se recomienda encarecidamente a los evaluadores utilizar la versión móvil de la aplicación, dado que su diseño ha sido especialmente optimizado para dispositivos móviles. Puede encontrar el apk correspondiente ([APK Aparking](https://mega.nz/file/pFpHWDZI#qtZ80TeAO0Wgde6GLk29ERDrFWPLf6u1efXlC0zMOO8))
- Además, se requiere activar el servicio de ubicación al probar la aplicación para una experiencia completa y precisa.

## **CASO 1: REGISTRO, INICIO Y CIERRE DE SESIÓN**
Los usuarios tienen la opción de registrarse o iniciar sesión, dependiendo de sus necesidades. 

---

![](/img/SR-WPL/startpage.png)

Figura 1 - Página de inicio

---

El proceso de registro implica proporcionar información personal (Nombre, correo, contraseña, fecha de nacimiento, DNI, sexo, número de teléfono), mientras que el inicio de sesión solo requiere un correo electrónico y una contraseña. Después del registro, se enviará un código de confirmación al usuario.

---

![](/img/SR-WPL/register.png)

Figura 2 - Página de registro

---

![](/img/SR-WPL/login.png)

Figura 3 - Página de inicio de sesión

---

![](/img/SR-WPL/registervalidation.png)

Figura 4 - Página de validación del registro

---

![](/img/SR-WPL/correovalidacion.png)

Figura 5 - Ejemplo de correo de validación

---

## **CASO 2: MAPA INTERACTIVO**
La página que se obtiene al iniciar sesión es el mapa interactivo, donde se toma la ubicación del usuario y se ofrecen las siguientes funciones como un buscador por pueblos, añadir una plaza en la ubicación actual y el reposicionamiento del mapa para la posición del usuario. Las plazas se muestran en el mapa, y se permite la opción de que se te guíe hasta la plaza con el uso de Google Maps.

Adicionalmente, al clicar en el logo de Aparking, se redirige a la página About Us.

---

![](/img/SR-WPL/map.png)

Figura 6 - Página del mapa interactivo

---

![](/img/SR-WPL/mapplaza.png)

Figura 7 - Página del mapa interactivo mostrando una plaza

---

## **CASO 3: ALQUILERES**
En la pestaña Alquileres se recogen las siguientes funcionalidades:

Se listan los garajes disponibles y se cuenta con un filtrado sobre el buscador. Además, se puede añadir un garaje propio, así como consultar tus reservas. Al clicar sobre un garaje se mostrarán sus datos y, dependiendo si pertenece al usuario logueado o no, se mostrará la opción de añadir disponibilidad (se requiere un plan, ver en su sección) o crear una reserva (donde se puede pagar con tarjeta), respectivamente.

---

![](/img/SR-WPL/alquiler1.png)
![](/img/SR-WPL/alquiler2.png)

Figura 8/9 - Página de los alquileres

---

![](/img/SR-WPL/misreservas.png)

Figura 10 - Página del listado de reservas propias

---

![](/img/SR-WPL/garagepropio.png)

Figura 11 - Página de los detalles de un garaje propio

---

![](/img/SR-WPL/disponibilidades.png)

Figura 12 - Página de las disponibilidades de un garaje propio

---

![](/img/SR-WPL/garagedeotro.png)

Figura 13 - Página de los detalles de un garaje de otro usuario

---

![](/img/SR-WPL/formreserva.png)

Figura 14 - Página del formulario de reserva

---

![](/img/SR-WPL/pagocard.png)

Figura 15 - Pago de la reserva

---

## **CASO 4: PERFIL**
En la pestaña perfil se permite consultar, modificar y borrar los datos de nuestra cuenta. Además, se pueden consultar los vehículos de los que disponemos, así como crear uno.

---

![](/img/SR-WPL/perfil.png)

Figura 16 - Página del perfil de usuario

---

![](/img/SR-WPL/listacoches.png)

Figura 17 - Página del listado de vehículos del usuario

---

![](/img/SR-WPL/regcoche.png)

Figura 18 - Página de creación de un vehículo

---

## **CASO 5: CESIONES**
En la pestaña Cesiones se muestran las distintas cesiones. Estas cesiones se pueden publicar si el usuario tiene alguna reserva de garaje activa (donde se indicará la hora a la que se dejará libre la plaza, entre otros datos), para que otro usuario pueda tomarla. También se dispone de la función de guiar a la plaza.

---

![](/img/SR-WPL/listcesiones.png)

Figura 19 - Página de cesiones (sin tener reservas)

---

## **CASO 6: PLANES**
En la pestaña Planes se muestran las distintas suscripciones que Aparking ofrece, junto a sus beneficios y precio. Un usuario puede suscribirse mediante su tarjeta de crédito. Además, se pueden comprar créditos de la aplicación para buscar aparcamientos por separado. Todas estas operaciones se realizan por stripe.

---

![](/img/SR-WPL/planes1.png)
![](/img/SR-WPL/planes2.png)

Figura 20/21 - Página de planes (con suscripción King activa)

---