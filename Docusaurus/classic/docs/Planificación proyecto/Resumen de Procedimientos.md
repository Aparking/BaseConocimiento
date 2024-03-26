Para consultas más específicas y más detalles, se recomienda visitar el documento de gestión de la configuración.

## Procedimiento y requisitos para el cierre de una tarea

Tras haber terminado el desarrollo de una tarea sobre su correspondiente rama, se procederá a realizar el cierre de la misma. Para ello, se deberán seguir los siguientes pasos:

- Mover tarea de In Progress a In Review en el tablero de GitHub Projects.
- Realizar un pull request de la rama de la tarea a la rama de su épica correspondiente o desarrollo.
- Esperar a que, mínimo dos miembros del equipo, revisen el código y aprueben el pull request.

Una vez revisada y aceptada, se procederá a realizar el merge. Tras esto, se moverá la tarea a Done en el tablero de GitHub Projects.

![Cierre de una tarea](/img/procedimiento-cierre.png)

## Estrategia de ramas y plantilla de nombre de rama

Para la gestión de ramas, se seguirá la siguiente estrategia:

- La rama `main` será la rama principal y de producción.
- La rama `develop` será la rama de desarrollo.
- Las ramas de épicas se crearán a partir de la rama `develop`.
- Las ramas de las tareas se crearán a partir de su rama de épica.

Para el nombre de las ramas, se seguirá la siguiente plantilla:

- `epic/nombre-epica` para las ramas de épicas.
- `feature/nombre-tarea/1` para las ramas de tareas. Los tests van aquí.
- `fix/nombre-hotfix/1` para las ramas de hotfix.

Se añade el nombre del número identificador de la issue en GitHub al final del nombre de la rama.

![Patrón de ramas](/img/patron_ramas.png)

## Plantilla de commit

- `feat`: se refiere a una nueva característica.
- `test`: el código es de pruebas.
- `fix`: arregla una funcionalidad, bug, etc.
- `config`: código de los archivos de configuración.
- `refact`: alteración del código.

Se añade el nombre del número identificador de la issue en GitHub al final del commit con #.

![Patron de commits](/img/patron_commit.png)
