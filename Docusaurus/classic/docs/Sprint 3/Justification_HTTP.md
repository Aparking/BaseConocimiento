# Informe sobre la NO Implementacióno de HTTPS en el proyecto

---

## Resumen ejecutivo

En el desarrollo y despliegue de nuestro proyecto, hemos decidido no implementar HTTPS debido a diversas limitaciones y restricciones técnicas. Aunque reconocemos la importancia de la seguridad en la comunicación web, las circunstancias particulares de nuestra infraestructura y recursos nos han llevado a esta decisión. En este informe, detallamos las razones detrás de esta elección y las alternativas consideradas.

---

## Razones del uso de HTTP

1. **Despliegue a través de máquinas virtuales en Google Cloud:**
   Nuestra aplicación se despliega mediante máquinas virtuales en Google Cloud. Esta elección se hizo debido a la complejidad de la infraestructura y los requisitos de los frameworks utilizados en el desarrollo. El despliegue en este entorno no permite una integración sencilla de HTTPS sin contenerización.

2. **Limitaciones de Alternativas de Despliegue:**
   Se evaluaron alternativas como PythonAnyWhere o Heroku, sin embargo, las máquinas gratuitas que ofrecen carecen de la potencia necesaria para nuestra aplicación. Esto nos impidió utilizar estas plataformas como solución para implementar HTTPS de manera sencilla.

3. **Configuración por Defecto de Google Cloud:**
   Optamos por utilizar los contenedores virtuales de Google Cloud gracias a los créditos educativos disponibles. Sin embargo, estos contenedores están configurados por defecto con HTTP. La habilitación de HTTPS requeriría la adquisición y configuración de un certificado, lo cual está fuera del alcance de nuestra tarifa educativa.

---

## Conclusión

Dadas las limitaciones técnicas y financieras mencionadas anteriormente, hemos tomado la decisión de no implementar HTTPS en nuestro proyecto. Reconocemos la importancia de la seguridad en la comunicación web y estamos comprometidos a revisar esta decisión en el futuro, especialmente a medida que nuestras circunstancias cambien y nuestra infraestructura evolucione.

---

## Recomendaciones para el Futuro

- Mantenerse al tanto de las actualizaciones y mejoras en las plataformas de despliegue disponibles.
- Considerar opciones de financiamiento o presupuesto para la adquisición de certificados HTTPS en el futuro.
- Explorar soluciones alternativas que puedan integrar HTTPS de manera más eficiente con nuestra infraestructura actual.

---