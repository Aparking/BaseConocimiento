---
sidebar_position: 1
---

## Resumen ejecutivo

La intención de este documento es la de permitir que el equipo de desarrollo inspeccione y adapte sus procesos para mejorar continuamente su eficacia y colaboración de cara a las siguientes iteraciones que debe realizar para el proyecto.
Este documento proporciona un espacio dedicado para que el equipo reflexione sobre el Sprint recién finalizado. Se revisan los logros, los desafíos, las dificultades y los éxitos alcanzados durante el Sprint. Asimismo, se identifican oportunidades para mejorar tanto los procesos de trabajo como la dinámica del equipo. Se buscan áreas donde se pueda optimizar el flujo de trabajo, la comunicación, la colaboración o cualquier aspecto que afecte la eficiencia y la calidad del trabajo.

## Metodología del equipo de desarrollo

En este primer apartado se recoge un análisis detallado del cumplimiento del equipo ante las normativas que se han declarado para el proyecto. Entre esas medidas destacamos:

- **Gestión de Issues**

En este Sprint, se crearon tareas épicas, de gran tamaño, que aludían a aquellos incrementos del proyecto con gran carga de trabajo. Estas tareas fueron divididas en otras de menor intensidad que estaban asociadas a las épicas a las que correspondían, siguiendo siempre el esquema del Product Backlog inicial. Al repartirlas, se intentó que no hubiera dependencias entre tareas de distintos miembros en lo posible y se asignó cada tarea de manera individual o por pares (dejando claro quién es el encargado de la tarea) si era más compleja. Como principales puntos a mejorar en las próximas iteraciones se destacan:

- **Repartición de tareas:** aunque el reparto ha sido aceptable, este podría ser aún mejor buscando como objetivo que cada miembro del equipo de desarrollo pueda trabajar de forma totalmente independiente en sus tareas y por tanto ser más eficiente y rápido. Asimismo, la carga de trabajo en un inicio no estaba compensada, pues se han dado casos en las que había miembros con más de siete tareas y otros integrantes con tres.
- **Estimaciones de las tareas:** a la hora de realizar un reparto lo más equitativo posible, se usó de referencia las estimaciones hechas por el equipo, buscando que todos los miembros tuvieran un número similar de puntos de esfuerzo. Sin embargo, en el desarrollo del Sprint, se observó como el esfuerzo real requerido para realizar ciertas tareas no correspondía con el que se suponía y algunas personas tuvieron una carga de trabajo mayor que otras. Además, fueron surgiendo nuevas tareas urgentes y se iban asignando a personas que ya tenían bastante Issues por delante.
- **Gestión de las tareas mejorable:** como es el primer Sprint, el grupo no se ha adecuado a las normativas de nomenclatura de tareas, ocurriendo errores puntuales como que no se les describieran las tareas, o no se ponían comentarios o discusiones si tenía dificultades. Otro fallo ha sido que ha habido tareas que han permanecido en “In review” a pesar de haber sido finalizada y su Pull Request haber sido aceptada y que otras no se hayan movido a “In review” al estar finalizada.

* **Gestión de ramas**

Durante el desarrollo de este proyecto hemos decidido utilizar la metodología de GitFlow, en este Sprint comenzamos inicialmente sin una nomenclatura clara, pero a medida que avanzó el entregable, el equipo intentó ceñirse más a dicha política. A continuación, se recogen los puntos más importantes:

- **Nomenclatura de las ramas:** en general, tanto en el repositorio donde se aloja el Backend como en el que se aloja el Frontend no se ha respetado la nomenclatura de las ramas. El equipo tenía una idea difusa de la estructura que tenía que seguir, ya que algunos utilizaban camel case, otros utilizaban barra baja para separar las palabras e incluso algunos escribían el nombre en inglés y otros en español, lo que si se tenía claro en general es la etiqueta que debe ir al inicio.
- **Posición de las ramas y cierre:** las ramas siempre se han hecho que partan de develop y que las tareas que vienen de una épica partan de estas. Cuando se ha tenido que hacer una Pull Request, esta se ha hecho hacia donde correspondía, es decir, de rama individual a épica, de épica a develop y de develop a main. Por último, cuando se terminaba una tarea, esta se acababa cerrando para evitar que se acumularan.

* **Commits y Pull Requests**

Por lo general y tras revisar el trabajo de los miembros del equipo, el seguimiento de patrones para commits y Pull Request ha sido el establecido por la gestión de la configuración planeada, aunque con algunos fallos en varios casos. Algunos de los fallos más comunes han sido:

- **No referenciar correctamente el ID de la Issue a la que hace referencia:** esto es, que a la hora de hacer commit, no se añadía un # con el ID correspondiente a la tarea. En el caso de las Pull Request, sucede algo parecido, tras ver en algunos casos que no se referencia la Issue en el título.

- **Añadir las Pull Request dentro del tablero Kanban:** no es realmente algo que esté establecido dentro del documento de la gestión de la configuración, pero se considera una mala práctica, ya que en el tablero Kanban solo deberían quedar reflejadas las tareas.

* **Commitment Agreement:**

En términos generales, los miembros del equipo de trabajo han cumplido con el Commitment Agreement, tras comprobar que gran parte del equipo ha cumplido con las 13 clausulas impuestas. Sin embargo, caben destacar algunos fallos cometidos, de cara a mejorar como miembros en el siguiente Sprint:

- **Colaboración y comunicación:** esta cláusula no ha sido el punto fuerte durante el transcurso del primer Sprint, ya que hay demasiadas herramientas de comunicación usadas entre el equipo de trabajo y no todos frecuentan de la misma forma estas, por lo que la comunicación y la constancia del cambio se pierde en algunas ocasiones.
- **Roles y finalización de tareas:** se ha incumplido al tener asignadas tareas de desarrollo que no se han elaborado al completo por falta de tiempo, sumándole a esto problemas sobre asignación de tareas, donde personas no estaban asignadas han trabajado sobre ellas, interrumpiendo en parte el trabajo del miembro.
- **Seguir estándares de configuración:** como se ha comentado en apartados anteriores, el cumplimiento de esta cláusula no ha sido el idóneo, debido a reajustes que se han tenido que realizar durante el desarrollo del Sprint.
- **Horas extras:** durante este sprint observamos que se han realizado más horas de trabajo de las estimadas originalmente. Esto no se alinea con nuestro acuerdo de trabajar un máximo de 10 horas por semanas en el proyecto. Como parte de nuestra mejora continua, es importante recordar respetar los límites establecidos y justificar cualquier trabajo realizado. Esto nos permitirá entender mejor los motivos detrás de este exceso y tomar medidas para ajustar la gestión de tareas si es necesario.

## Reflexión del Sprint

En esta sección se estudia el desempeño llevado a cabo por el equipo de desarrollo durante el transcurso del primer entregable. A rasgos generales, el equipo ha trabajado aceptablemente.

Al inicio del Sprint se han encarado muchas dificultades, en especial relacionadas con la planificación y organización, las cuales, se fueron solventando cuando comenzó la segunda semana de la iteración. Adicionalmente, al equipo le costó reaccionar al trabajo que había que realizar en el Sprint y eso desencadenó un retraso general en las tareas de programación. Otro punto destacable es que, al ser un grupo conformado por un gran número de personas, la comunicación ha sido complicada de mantener y ha habido normativas que no se han respetado por esa misma razón, influenciando negativamente a la calidad del entregable y ocasionando la activación de algunos riesgos que se habían contemplado.

Sin embargo, como punto a favor del equipo de AparKing, cabe destacar que, a pesar de las adversidades, el equipo ha conseguido sostenerse y trabajar arduamente para anular los riesgos que han surgido y para intentar avanzar la mayor cantidad de trabajo posible en un tiempo tan reducido. Además, en las tareas de documentación el desempeño fue muy bueno, ya que se revisaron por varios integrantes y obtuvieron muchas modificaciones, lo cual se puede notar en la calidad de los documentos. Otro punto fuerte ha sido que, en momentos de dificultad, el equipo ha estado siempre apoyando y proporcionando ayuda para solventarlos, ayudando a sacar algunas tareas más desafiantes.

De manera más detallada, se recogen y diferencian tanto lo conseguido en este entregable como aquellos aspectos que se podrían mejorar:

- **Logros y éxitos:**
  - **Registro de tiempo:** la herramienta de Clockify se ha utilizado correctamente, ya que los miembros del equipo cumplen con sus horas acordadas, además de tener organización sobre las tareas.
  - **Documentación:** este es un buen punto para destacar en este Sprint, ya que todos los documentos están bien estructurados, además de tener un buen contenido revisado y actualizado varias veces tras las críticas semanales por su mejora.
  - **Planificación:** otro punto fuerte de este Sprint ha sido la dedicación por una buena planificación, sobre todo tras la activación del riesgo relacionado con esta. Gracias a ello, el proyecto cuenta con Planificaciones de Gestión de la Calidad y Configuración, además de tener anotada las tareas en GitHub para que quede claro.
  - **Mitigación de riesgos:** se han conseguido mitigar algunos riesgos que han surgido durante las primeras semanas de desarrollo.
- **Desafíos y dificultades:**
  - **Etapa de desarrollo:** se ha comenzado demasiado tarde a realizar código de desarrollo para implementar la funcionalidad del proyecto, lo que ha resultado en horas de trabajo extras a última hora para poder seguir con la normalidad del Product Backlog en la medida de lo posible.
  - **Formación del equipo:** no se ha seguido un buen plan de formación, debido a esto la dedicación de tiempo para formar a los miembros del equipo en Angular ha sido insuficiente, por lo que han surgido bastantes problemas ligados a realizar una interfaz para la funcionalidad creada. Principalmente se debería de haber establecido la formación con anterioridad al Sprint de desarrollo para que el equipo llegará con el suficiente conocimiento para afrontar dichas tareas.
  - **Gestión de las comunicaciones:** un gran problema de este Sprint (a pesar de mejorarlo durante el transcurso), es la comunicación del equipo, ya que existen demasiados canales de comunicación en uso ahora mismo y no todos hacen uso de estos, por lo que hemos sufrido pérdidas de información, no dejando constancia del cambio y causando que algunos miembros se encontraron un tanto aislados en cuanto a los acontecimientos y decisiones tomadas.
  - **Desinformación del equipo:** muchos integrantes no tenían claras algunas normativas de la gestión de la configuración o no sabían qué tareas tenían asignadas. Para próximos entregables, el equipo deberá prestar mayor atención a esos detalles.

## Plan de acción

De esta manera, tras analizar las circunstancias que se han dado durante el Sprint, se puede obtener el siguiente plan de acción, el cual está destinado a anotar aquellas mejoras y consejos para comenzar a tener en cuenta por los integrantes para el próximo entregable, o “_start doing_”, situaciones que el equipo debería continuar haciendo, o “_continue doing_”, ya que funcionan y se hacen de manera correcta y acciones que se deben de dejar de hacer porque están perjudicando el desempeño grupal, o “_stop doing_”.

Con este plan de acción se pretende que todos los miembros del equipo tengan constancia de qué acciones son viables y lo apliquen para siguientes entregables o proyectos. A continuación, se muestra la lista:

| START                                               | STOP                                        | CONTINUE                                              |
| --------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| Canales de comunicación fijos                       | Desinterés por parte de algunos integrantes | Plan de elaboración de documento                      |
| Formación para desarrollo                           | Echar demasiadas horas extras               | Registro del tiempo                                   |
| Ceñirse al documento de gestión de la configuración | Empezar las tareas lo antes posible         | Aportar de feedback a las tareas                      |
| Ceñirse al Commitment Agreement                     | Asignación de tareas no equitativa          | Mantener calidad de los documentos                    |
| Atender los comentarios de las Pull Request         | Hacer tareas que no tienes asignadas        | Mover las tareas cuando se hayan realizado o revisado |
| Comentar los problemas en el panel Discussions      |                                             | Prestar atención a los riesgos mitigados              |
|                                                     |                                             | Tomar las críticas del profesorado y mejorar          |
