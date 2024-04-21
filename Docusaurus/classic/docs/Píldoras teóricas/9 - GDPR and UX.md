---
sidebar_position: 7
---

# GDPR y UX

## GDRP (General Dada Protection Regulation)

Regulación de la unión europea.

En el caso de que se incumpla la regulación hay una penalización de un 4% de los beneficios de la empresa, con un tope máximo de 20M€.

5 aspectos a cumplir fundamentales:

- **Términos claros**: Debe haber una descripción de los términos de privacidad de una manera clara, debe ser corto y directo. Debe tener los términos de uso para que el usuario pueda decidir si acepta o no acepta estos términos.
- **Garantizar la privacidad**: Garantizar a los usuarios que los datos que proporciona no es accesible por terceros. Asegurarse de que es un servicio HTTPS.
- **Plan de contingencia**: Se debe tener un sistema de gestión de contingencia en términos de los riesgos como filtraciones de datos, brechas de seguridad, …. Se debe poder contactar a los usuario en el caso de que haya algún problema con la seguridad y la privacidad.
- **Derecho al olvido**: Si un usuario lo desea se debe poder eliminar o anonimizar toda la información relativa a él en la aplicación.
- **Derecho a obtener los datos**: Los usuarios pueden obtener sus datos usados en la aplicación

### Implementación

| DO                                                                                                     | DON'T                                          |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| Sistemas manuales (tener un correo para que los usuarios puedan pedir todo lo relacionado con la GDPR) | Sistemas automatizados                         |
| Uso legítimo                                                                                           | Recoger datos que no son totalmente necesarios |
| Anonimizar                                                                                             | Borrar                                         |

Debería haber gente que haga el rol de **GPRD Officer**, se debe indicar en los presupuesto e indicar quien cumple ese rol.

## UX (User experience)

Consejos:

- Basar las decisiones el cosas que pueden ser validadas pronto. Se debe plantear un análisis al momento de implementar lo decidido.
- No asumir que los usuario van a actuar de manera intuitiva.
- Tomar el contento en consideración a la hora de tomar decisiones.
- Buscar la consistencia en las interfaces.
- No reinventar la rueda. No intentar hacer desde 0 algo. Usar bibliotecas de estilo, plantillas de componentes, ….
- Crear interfaces accesibles e inclusivo.
- Menos es más:
  - Quitar cosas que no sean necesarias
  - Reducir la carga cognitiva.
  - “Don’t make them think”, facilitar mucho el uso al usuario.
