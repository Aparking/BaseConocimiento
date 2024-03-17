---
sidebar_position: 5
---

# Testing

El testing se usa para mostrar la presencia de bug, pero nunca la ausencia de ellos.

## Test unitarios

- Se prueba la unidad, dependerá de cada entorno.
- La mayor parte de los test deben ser test unitarios.
- Tiene un alcance bajo porque se prueban unidades pequeñas en detalles.
- Deben ejecutarse rápidamente
- Si para testear una unidad hace falta colaboradores externos, se reemplaza por dobles de test especialmente si dependen de internet.

## Test de integración

Puede que haya problemas en los procesos de integración entre los módulos.
Hay que asegurarse que la conexión con módulos externos de ejecuta correctamente, probamos que la información que se intercambia se ejecuta correctamente.

### Probar integración con servicios internos:

1. Lanzar base de datos.
2. Conectar la aplicación a la base de datos.
3. Ejecutar una función de tu código que escriba datos en la base de datos.
4. Comprobar que los datos que se han escritos son los esperados.

### Probar integración con servicios externos:

1. Iniciar aplicación.
2. Empezar una instancia en un servicio separado (o un doble de test con la misma interfaz)
3. Ejecutar la función de tu código que lea desde el servicio de la API.
4. Comprobar que la aplicación puede parsear correctamente la respuesta.

## Test End-to-End

Comprueban el funcionamiento completo de la aplicación suponiendo que el usuario ha ejecutado al interfaz gráfica.
Son test muy lentos, hay que limitar el desarrollo de estas pruebas. Que solo se ejecuten a petición.

## Test de aceptación

Tiene como objetivo responder a ciertas preguntas.

- ¿Cumple la especificación?
- ¿Cumple lo que he construido con lo que el cliente quería?
  Se definen escenarios antes de empezar con la implementación: Dado, Cuando, Entonces.
  Ejemplo:
- **Dado** que hay un usuario logeado y hay un artículo bicicleta.
- **Cuando** el usuario navega hasta la página de detallades de bicicleta y le da al botón de añadir a la cesta.
- **Entonces** el artículo bicicleta debería añadirse a la cesta de la compra.
  Hay que especificarlos con el máximo nivel de detalle posible, usar ejemplos.

## Test de interfaz de usuario

Herraminetas: Katalon Recordes + Selenium + JUnit5

## Test manuales

Todos los test pueden ser automatizados, pero es probable que haya cosas que se queden sin probar o hay ciertas cosas que no se pueden automatizar (Por ejemplo, la usabilidad y el diseño)

- Se usa siempre un conjunto de datos de prueba destructivos para provocar problemas y errores en la aplicación
- Documentar siempre los test y pasos que se va a seguir.
- Escribir el test automático para los bugs encontrados.

## Test de rendimiento

Comprobar como se ofrece la funcionalidad del sistema.

- Estabilidad.
- Respuesta ante una carga de trabajo.
  No se debe de hacer pruebas de rendimiento en un entorno de desarrollo ni en un entorno de producción.
  Hay que hacerlo en un entorno de pre-produccion que simule un entorno de producción con máquinas que sean similares en capacidad a las máquina de producción.

### Test de carga

Identifica el cuello de botella cuando se aplica distintos niveles de carga en la aplicación. Se va incrementando gradualmente la carga. Lo ideal es tener herramientas de monitorización para poder identificar el problema en los componentes que participan en la ejecución.

### Test de estrés

Determina el punto de ruptura a partir del cual el sistema no se comporta regularmente.
Herramientas:

- Gatling.
- Apache Jmeter
