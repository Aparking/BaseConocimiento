---
sidebar_position: 1
---

## Killer openers
Técnicas para llamar la atención de la audiencia. Lo ideal es dirigir a la audiencia a la perspectiva del mensaje. 
* Shock: causar impacto en el buen sentido, llegar al sentimiento, buscar la conexión con la audiencia. 
* Historia: contar una historia. Hacer alusión a lo largo de la presentación, terminando la presentación con la conclusión de la historia. 
* Intriga: contar una historia con intriga, dejar en suspense a la audiencia 
* Imagen bonita que te acompañe. 
* Humor: que el humor sea neutro para no ofender a nadie. Comenzar con un chiste y acabar con él la presentación. 
* Inspiración: citas inspiracionales, frases conocidas, etc. 
* Cambio de perspectiva: dirigir con tu inicio a la audiencia con lo que tú quieres que piensen. 
* Hacer una promesa: “si me atendéis vais a aprender a cómo...” 
* Hacer referencia a eventos históricos o actuales. 
* Silencio. La mencionan todos los gurús de este tema dicen que es efectiva. Consiste en permanecer de pie en silencio (la típica).

## Risk openers 
Existen diferentes etapas:
### Identificación
Todo parte de un brainstorming del grupo. Y podemos clasificar los riesgos en los siguientes grupos: 
* Estimación: estimar mal el tiempo de una tarea 
* Técnicos: no conocer la tecnología, confiar demasiado en una persona 
* Requisitos: el cliente modifica los requisitos 
* Organizacionales: problemas internos de la organización. Que haya gente que no sea tan productiva, problemas de comunicación 
* Internos al equipo de desarrollo (personales, técnicos, etc.) 
* Externos al equipo (clientes y factores externos) 
* Internos-externos (entran en juego tanto elementos internos como externos) 

Lo interesante no es clasificarlos sino detectarlos. Ejemplos de riesgos: 
* Grado de innovación tecnológica: si tenemos mucha innovación puede ser un riesgo porque hay que dedicar mucho tiempo a la formación. 
* Requisitos cambiantes. 
* Arquitectura del sistema no bien planificada. 
* Falta de un buen testing del sistema, en particular, en rendimiento. 
* Baja calidad del software, difícil de mantener. 
* Deadlines muy agresivos.
* Baja productividad. 
* Baja documentación. 
* Falta de compromiso. 
* Falta de comunicación. 
* Bus factor: riesgo de depender de otros desarrolladores. 
* Problemas de presupuesto.

### Análisis y priorización 
Una vez tenemos todas esas situaciones identificadas, debemos darnos cuenta de cuales son más probables de ocurrir y anticipar su impacto en el proyecto. Por tanto, hay que hacer una tabla en la que registremos todos los riesgos con los siguientes datos: 

* Para cada riesgo, hacer: 
    * Probabilidad_riesgo = estimar 
    * Impacto_en_proyecto = estimar (escala 1 al 5 por ejemplo) 
    * Factor_riesgo = probabilidad_riesgo * impacto_en_proyecto 
    * Return factor_riesgo, prioridad (estimarla)

También, existen otros tipos de tablas para mostrar los riesgos: 
**IMAGEN**

### Evitar o mitigar riesgos 

Si hay riesgos con mucha probabilidad, quizás hay que redefinir el alcance del proyecto, de cierta funcionalidad del sistema, etc. Añadir una nueva columna, llamada “plan de contingencia”, a la tabla de registro de los riesgos y explicar qué es lo que habrá que hacer en caso de que ocurra dicho problema.

### Monitorización de riesgos 

Los riesgos hay que monitorizarlos y ver en qué estado se encuentran para saber si hay que aplicar el plan de contingencia. Y luego, si el riesgo ha ocurrido, tenemos que comprobar que el plan de contingencia funciona. En caso de que no, tenemos que llevar a cabo acciones correctivas. 

Existen diferentes herramientas para la gestión de riesgos. En las diapositivas recomiendan algunas. Pero no es necesario, se podría hacer con excel y automatizar colores para las probabilidades o los impactos, etc.

## Gestión de los usuarios piloto 

### Selección de participantes 

Fundamental que sean parte de la audiencia potencial del proyecto. Cubrir todos los tipos de perfiles, más o menos hábiles con la tecnología, etc. 

### Selección de los escenarios de prueba 

Elegir qué módulos del sistema van a probar los usuarios piloto. 

### Plan de pruebas y seguimiento del feedback 

Dejar claros los tiempos de prueba de cada funcionalidad y preparar una encuesta para recoger el feedback. Se recomienda definir métricas específicas para medir las respuestas de los usuarios a la encuesta. Por ejemplo, si marcan de un 9 a 10 significa que ha funcionado genial, si marcan de 7 a 8 que “ni fu ni fa” y si marcan de 0 a 6 que no nos sirve y hay que mejorar. 

También, medir la tendencia. Con los cambios, reevaluar a los usuarios con la aplicación y ver si avanza o disminuye su valoración del sistema con esos cambios. 

### Plan de comunicaciones 

* Elegir cómo comunicarnos con los usuarios piloto 
* Establecer canales (iTop, slack, etc.) 
* Siempre disponibles para los usuarios piloto 
* Dejar claras las fechas de pruebas 

### Conducir a los usuarios 

Si no ofrecemos alguna ventaja no motivamos a los usuarios a que realicen las pruebas. 

### Sacar conclusiones 

Hay que priorizar el feedback, habrá cosas que se hagan y cosas que no. Pero, tenemos que procurar que el usuario sienta que se le ha tenido en cuenta. 

### Diferencia entre Pilot Testing y Beta Testing 
**IMAGEN**