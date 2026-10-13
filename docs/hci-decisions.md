# Decisiones de Interacción Humano-Computador

## 1. Propósito y alcance

Este documento registra las decisiones de HCI del portafolio digital de Jorge Torres Maldonado. Su objetivo no es justificar la estética de forma abstracta, sino relacionar necesidades de usuario, arquitectura, componentes, riesgos y criterios verificables.

El sitio se plantea como una experiencia *single page* en español, desarrollada con HTML, CSS y JavaScript nativos. Debe permitir una lectura rápida y, al mismo tiempo, ofrecer suficiente contexto técnico. La información procede del brief y del CV; no se deben inferir años de experiencia, métricas de impacto, clientes, repositorios, demostraciones ni capturas que no estén confirmados.

> **Estado del documento:** las decisiones descritas se contrastaron con la implementación final mediante validación de marcado, pruebas funcionales y responsive en navegador, revisión visual, comprobaciones de mejora progresiva y una auditoría Lighthouse local el 13 de octubre de 2026. La sección 10 documenta resultados, alcance y pruebas manuales pendientes.

## 2. Objetivos de usuario

| Audiencia | Objetivo principal | Información prioritaria | Respuesta de diseño |
|---|---|---|---|
| Reclutadores | Determinar en pocos segundos el perfil y la pertinencia profesional | Rol, propuesta de valor, experiencia, tecnologías, CV y contacto | *Hero* directo, CTA visibles, resumen escaneable y navegación persistente |
| Desarrolladores e ingenieros | Comprender el tipo de problemas resueltos y las decisiones técnicas | Problema, solución, participación, tecnologías y contexto de cada proyecto | Casos de proyecto estructurados y etiquetas técnicas agrupadas |
| Profesores de HCI | Identificar decisiones centradas en el usuario y su trazabilidad | Arquitectura, accesibilidad, heurísticas, animación y evaluación | Este documento, semántica, estados observables y criterios de verificación |
| Compañeros y comunidad académica | Explorar formación, intereses, cursos y logros | Trayectoria académica, certificaciones, habilidades e idiomas | Bloques breves con jerarquía y categorías reconocibles |
| Personas con oportunidades o ideas | Encontrar una vía de contacto fiable | Correo, LinkedIn y GitHub | Cierre de contacto, enlace `mailto:` y acción de copiar con feedback |

### Tareas críticas

1. Entender quién es Jorge y qué hace sin desplazarse de forma obligatoria.
2. Llegar directamente a proyectos, experiencia, perfil o contacto.
3. Evaluar la relevancia de los proyectos sin acceder a información institucional confidencial.
4. Descargar el CV mediante una acción inequívoca.
5. Contactar por un canal real sin completar un formulario ficticio.

## 3. Arquitectura de información

La secuencia responde a un modelo de divulgación progresiva: primero identidad y propuesta de valor; después evidencia; finalmente credenciales y contacto.

```text
Inicio
├── Hero: identidad, especialidad, fotografía y acciones principales
├── Sobre mí: contexto, intereses y orientación profesional
├── Proyectos: problema, solución, participación y tecnologías
├── Experiencia: roles, periodos y responsabilidades
├── Tecnologías: categorías sin porcentajes subjetivos
├── Formación: educación, certificaciones, logro e idiomas
└── Contacto: correo, LinkedIn, GitHub y retorno al inicio
```

La barra principal prioriza **Inicio**, **Proyectos**, **Experiencia**, **Sobre mí** y **Contacto**, porque representan los destinos más probables. El resto se descubre mediante el flujo de lectura, sin ampliar innecesariamente la navegación. Las anclas admiten enlaces profundos, favorecen el control del usuario y mantienen la navegación predecible.

### Jerarquía de contenido

- **Nivel 1 — reconocimiento inmediato:** nombre, disciplina, situación académica y propuesta de valor.
- **Nivel 2 — evidencia profesional:** tres proyectos reales y experiencia.
- **Nivel 3 — respaldo:** habilidades, formación, certificaciones, logro e idiomas.
- **Nivel 4 — siguiente acción:** descargar CV, contactar o visitar perfiles profesionales.

La cantidad de información se controla mediante títulos informativos, párrafos breves, etiquetas y agrupación por proximidad. No se oculta contenido esencial tras carruseles, modales o interacciones exclusivas del puntero.

## 4. Principios de diseño utilizados

### Consistencia

Los tokens CSS centralizan color, tipografía, espaciado, radios, sombras, duración y curva de movimiento. Botones, enlaces, tarjetas, etiquetas y estados interactivos conservan el mismo lenguaje visual y conductual. La consistencia reduce el aprendizaje necesario entre secciones.

### Feedback

Los controles comunican sus estados `hover`, `focus-visible`, activo y presionado. Al copiar el correo se presenta confirmación visible y, mediante una región `aria-live`, perceptible sin visión. El botón del menú informa su estado con `aria-expanded`.

### Visibilidad

Las acciones principales se muestran como controles explícitos. La sección actual tiene un indicador en la navegación y el menú móvil no esconde su propósito tras un icono sin nombre accesible. El correo permanece disponible como texto o enlace aunque la copia automática falle.

### Reducción de carga cognitiva

El contenido se divide en bloques temáticos, se limita a tres proyectos relevantes y evita métricas o barras de habilidad sin base objetiva. La jerarquía tipográfica y el espacio en blanco permiten escanear antes de leer en detalle.

### Reconocimiento sobre memorización

Las etiquetas de navegación describen destinos; las tecnologías aparecen agrupadas por función; cada proyecto conserva la misma estructura informativa. La persona no necesita recordar gestos, iconos ambiguos ni rutas ocultas.

### Prevención de errores

No se muestran botones de demostración o repositorio si el destino no existe. Los archivos, enlaces externos y anclas deben comprobarse antes de publicar. Las ilustraciones conceptuales deben etiquetarse como tales para no confundirse con capturas reales.

### Accesibilidad y diseño centrado en el usuario

La interfaz admite teclado, tacto, ratón y tecnologías de asistencia. La mejora visual no condiciona el acceso al contenido. Las decisiones priorizan las tareas críticas de las audiencias antes que la cantidad de componentes o efectos.

## 5. Sistema visual y patrones de interacción

- **Paleta:** fondo blanco y gris claro, texto casi negro, texto secundario gris y un azul de acento. Se busca jerarquía, no decoración. El color nunca es la única señal de estado.
- **Tipografía:** pila de sistema (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`) para legibilidad, rendimiento y ausencia de licencias externas.
- **Escala:** tamaños fluidos con `clamp()` y longitudes de línea contenidas para evitar extremos en móvil y escritorio.
- **Espaciado:** escala reutilizable y agrupación por proximidad; las separaciones entre secciones son mayores que las separaciones internas.
- **Fotografía:** imagen integrada en el *hero*, con proporción reservada, recorte responsable y texto alternativo conciso. No se alteran rasgos ni se aplican filtros exagerados.
- **Proyectos:** composición editorial con variación controlada de tamaño, pero estructura semántica consistente. Los visuales abstractos se identifican como representaciones conceptuales.
- **Experiencia:** línea temporal sencilla, con fechas y responsabilidades legibles; la decoración no compite con el contenido.
- **Habilidades:** categorías y etiquetas en lugar de porcentajes no verificables.
- **Contacto:** enlaces reales, copia de correo como conveniencia y `mailto:` como alternativa robusta.

El diseño es mobile first. En móvil, el orden de lectura es lineal; en pantallas amplias, el *hero* utiliza dos columnas y los proyectos pueden adoptar una retícula editorial. El cambio de composición no debe alterar el orden lógico del DOM.

## 6. Aplicación de las diez heurísticas de Nielsen

| # | Heurística | Componentes concretos y decisión | Riesgo de usabilidad | Mitigación y criterio verificable |
|---:|---|---|---|---|
| 1 | Visibilidad del estado del sistema | Indicador de sección activa, `aria-expanded` en el menú, estados de botones y confirmación al copiar el correo | El indicador puede quedar desincronizado o el mensaje de copia pasar inadvertido | Sincronizar el estado al desplazarse y al activar enlaces; mostrar texto visible y anunciarlo en una región `aria-live` |
| 2 | Correspondencia entre el sistema y el mundo real | Etiquetas familiares como “Proyectos”, “Experiencia” y “Contacto”; cronología con fechas; tecnologías agrupadas por su uso | El vocabulario técnico puede excluir a visitantes no especializados | Priorizar lenguaje directo, explicar siglas en contexto y describir el valor del proyecto antes del detalle técnico |
| 3 | Control y libertad del usuario | Anclas directas, enlace para saltar contenido, navegación sin *scroll hijacking*, menú cerrable con `Escape` y acciones que no bloquean la lectura | El menú puede retener o perder el foco; una animación puede sentirse obligatoria | Devolver el foco al botón al cerrar, permitir salida inmediata y desactivar movimiento no esencial con `prefers-reduced-motion` |
| 4 | Consistencia y estándares | Tokens visuales, patrones uniformes de botones y tarjetas, enlaces reconocibles, comportamiento de navegación convencional | Variantes de CTA o tarjetas pueden parecer acciones distintas sin serlo | Reutilizar clases y estados; reservar estilo primario para la acción principal y mantener nombres accesibles coherentes |
| 5 | Prevención de errores | Solo enlaces y archivos existentes; ausencia de formulario sin backend y de botones a demos inexistentes; rutas relativas controladas | Descarga rota, enlace desactualizado o acción de copia no permitida por el navegador | Validar destinos en despliegue, conservar `mailto:` y correo visible, y comprobar rutas con sensibilidad a mayúsculas |
| 6 | Reconocimiento antes que recuerdo | Navegación descriptiva, categorías de habilidades, etiquetas tecnológicas y estructura repetible de los casos | Un exceso de etiquetas puede degradar el escaneo | Agrupar por función, limitar metadatos visibles y mantener próximos título, descripción y acción relacionada |
| 7 | Flexibilidad y eficiencia de uso | Barra persistente, enlaces profundos, CTA al CV y contacto, copia de correo y adaptación a teclado/tacto | La barra fija puede cubrir el destino de un ancla o reducir demasiado el área útil | Aplicar `scroll-margin-top`, ajustar su altura por *breakpoint* y verificar zoom y pantallas de 320 px |
| 8 | Diseño estético y minimalista | Tres proyectos con información real, amplio espacio en blanco, paleta contenida y ausencia de medidores o efectos decorativos sin función | Minimalismo mal aplicado puede reducir contraste, ocultar affordances o crear espacios excesivos | Mantener enlaces y foco reconocibles, comprobar contraste y ajustar espacios con una escala responsive |
| 9 | Ayudar a reconocer, diagnosticar y recuperarse de errores | Mensaje específico si copiar falla, correo seleccionable y `mailto:` alternativo; contenido visible si JavaScript no se ejecuta | Un error silencioso de Clipboard API o JavaScript puede dejar al usuario sin siguiente paso | Capturar el fallo, explicar la alternativa en lenguaje claro y aplicar mejora progresiva sin ocultar contenido base |
| 10 | Ayuda y documentación | Microtexto en acciones, contexto estable en los proyectos, etiquetas para visuales conceptuales, README y este registro de decisiones | Una acción o representación puede ser ambigua; la documentación técnica podría no estar disponible desde el sitio | Usar nombres descriptivos y contexto junto al elemento; mantener documentación versionada en el repositorio |

## 7. Accesibilidad

El nivel de referencia es WCAG 2.2 AA. Estas decisiones deben confirmarse con pruebas, no solo mediante inspección del código.

### Estructura y lectura

- Usar `header`, `nav`, `main`, `section`, `article` y `footer` de acuerdo con su significado.
- Mantener un único `h1` descriptivo y una jerarquía sin saltos arbitrarios.
- Incluir un enlace “Saltar al contenido principal” que se vuelva visible al recibir foco.
- Conservar un orden del DOM que tenga sentido sin CSS y coincida con el orden visual.
- Limitar el ancho de los párrafos y evitar tamaños de texto excesivamente pequeños.

### Teclado y foco

- Todo control debe ser operable con teclado y mostrar `:focus-visible` con contraste suficiente.
- El menú móvil debe anunciar apertura/cierre, cerrarse con `Escape` y gestionar el foco de forma predecible.
- Los destinos de anclas deben quedar visibles bajo la barra fija.
- No se deben asignar acciones exclusivamente a `hover` ni usar elementos no interactivos como botones.
- Los objetivos táctiles deben tener un área cómoda; se recomienda al menos `44 × 44` CSS px cuando la composición lo permita.

### Percepción y contenido

- Verificar contraste AA en texto, controles, bordes esenciales y estados de foco.
- No depender solo del color para indicar sección activa, éxito o error; combinar color con forma, texto o subrayado.
- La fotografía debe tener un texto alternativo funcional, por ejemplo: “Retrato profesional de Jorge Torres Maldonado”. Los gráficos puramente decorativos deben omitir información redundante.
- Los enlaces deben describir el destino en su contexto; evitar textos aislados como “clic aquí”.
- Reservar dimensiones o relación de aspecto de imágenes para limitar cambios inesperados de diseño.

### Compatibilidad y mejora progresiva

- El contenido, las anclas, el CV y los enlaces de contacto deben seguir disponibles sin JavaScript.
- Las clases que ocultan contenido para animarlo solo deben aplicarse después de confirmar que JavaScript se ejecuta.
- La respuesta a copiar correo debe ser visible y anunciada sin mover el foco innecesariamente.
- El zoom y el aumento de texto no deben producir solapamientos ni desplazamiento horizontal de la página.

## 8. Animaciones y microinteracciones

El movimiento comunica jerarquía y estado; no constituye contenido ni mecanismo de navegación. Se priorizan `opacity` y `transform` para limitar trabajo de composición. Una curva como `cubic-bezier(0.22, 1, 0.36, 1)` puede unificar el carácter del movimiento.

| Interacción | Propósito | Implementación prevista | Comportamiento con movimiento reducido |
|---|---|---|---|
| Entrada del *hero* | Guiar la atención hacia identidad, propuesta y acciones | Secuencia corta de opacidad y desplazamiento leve, sin bloquear controles | Contenido visible de inmediato, sin desplazamiento animado |
| Revelado al hacer *scroll* | Reforzar agrupación y ritmo de lectura | `IntersectionObserver` añade una clase una sola vez; estado base legible | Sin ocultamiento inicial ni transición |
| Cambio de barra de navegación | Comunicar que la navegación permanece disponible | Transición breve de fondo, borde o sombra | Cambio instantáneo de estado |
| Botones y tarjetas | Confirmar posibilidad de interacción | Variación sutil de color, sombra o traslación; foco equivalente al hover | Sin traslación; conservar contraste y feedback |
| Menú móvil | Explicar relación entre control y panel | Transición breve que no impide cerrar ni seleccionar | Apertura y cierre inmediatos |
| Copiar correo | Confirmar el resultado | Cambio de etiqueta o mensaje temporal, además de anuncio accesible | Mismo mensaje, sin animación |

No se utiliza parallax agresivo, desplazamiento controlado por el sitio ni animaciones largas. La interacción debe poder realizarse antes de que cualquier transición termine. Si JavaScript falla, el contenido no puede quedar con `opacity: 0`.

## 9. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Exceso de información en una sola página | Fatiga y dificultad para localizar evidencia | Navegación por anclas, secciones claramente rotuladas, párrafos breves y divulgación progresiva |
| Estética minimalista con affordances débiles | Enlaces o controles poco reconocibles | Estilos persistentes de enlace, contraste, iconos acompañados de texto y foco visible |
| Barra fija que cubre contenido | Pérdida del encabezado al navegar | `scroll-margin-top`, altura responsive y pruebas con zoom |
| Menú móvil inaccesible | Bloqueo para teclado o lector de pantalla | Botón semántico, nombre accesible, `aria-expanded`, `Escape`, gestión y restauración de foco |
| Contenido oculto por animaciones | Información inaccesible con JS deshabilitado o preferencias especiales | Mejora progresiva, estado base visible y regla global de movimiento reducido |
| Fallo al copiar el correo | Acción sin resultado o incertidumbre | Mensaje de error comprensible, correo seleccionable y enlace `mailto:` |
| Recursos institucionales sensibles | Divulgación o interpretación incorrecta | Solo texto autorizado y visuales abstractos marcados como conceptuales; sin capturas ni enlaces privados |
| Enlaces o rutas rotas en GitHub Pages | CV, imagen o navegación no disponibles | Rutas relativas, revisión de mayúsculas y prueba sobre la URL desplegada |
| Retícula editorial que reordena el significado | Lectura incoherente con teclado o tecnología de asistencia | Mantener el orden lógico en HTML y variar solo la presentación visual |
| Fotografía protagonista que desplaza el mensaje en móvil | El usuario no identifica rápidamente el perfil | Priorizar texto esencial, controlar tamaño y proporción y validar a 320/375 px |
| Etiquetas tecnológicas demasiado numerosas | Ruido visual y mayor carga cognitiva | Agrupar por función, limitar repetición y preservar nombres legibles |

## 10. Evaluación y evidencia

### 10.1 Pruebas realizadas

Las siguientes comprobaciones se realizaron sobre la versión final servida localmente el **13 de octubre de 2026**:

| Área | Entorno y procedimiento | Resultado |
|---|---|---|
| Marcado | `html-validate 11.16.2` sobre `index.html` | 0 errores y 0 advertencias |
| Responsive | Microsoft Edge 155 en modo headless y revisión de capturas a 320, 375, 768, 1024 y 1440 px | Sin desbordamiento horizontal, solapamientos ni contenido oculto |
| Navegación móvil | Apertura, `aria-expanded`, bloqueo del fondo, cierre con `Escape` y restauración del foco | Comportamiento esperado en todos los pasos comprobados |
| Navegación de página | Anclas e indicador de sección durante el desplazamiento | Destino e indicador activos correctamente |
| Copia de correo | Activación del botón y observación del texto y región de estado | Correo copiado y confirmación visible generada |
| Movimiento reducido | Emulación de `prefers-reduced-motion: reduce` | Contenido visible, desplazamiento automático y sin animación no esencial |
| JavaScript deshabilitado | Carga y revisión visual del documento sin ejecutar scripts | Contenido, navegación, CV, correo y enlaces disponibles; control exclusivo de copia oculto |
| Recursos y consola | Inspección de solicitudes y mensajes del navegador | Recursos locales con estado 200 y MIME correcto; 0 errores de consola y 0 solicitudes fallidas |
| Contenido y privacidad | Contraste con el CV fuente; extracción y renderizado de la copia pública del CV | Contenido profesional conservado; teléfono omitido en la copia pública; 2 páginas sin defectos visuales detectados |
| Rendimiento | Lighthouse 13.5.0 sobre servidor local | Performance 99, Accessibility 100, Best Practices 100 y SEO 100 |

Lighthouse registró FCP de 1,5 s, LCP de 1,6 s, TBT de 0 ms y CLS de 0. Estos valores son evidencia de laboratorio local y deben volver a medirse en producción. La puntuación automatizada de accesibilidad no equivale por sí sola a conformidad integral con WCAG 2.2 AA.

### 10.2 Pruebas recomendadas

| Área | Procedimiento | Criterio de aceptación | Estado |
|---|---|---|---|
| Navegación por teclado | Recorrer desde el enlace de salto hasta el footer con `Tab`, `Shift+Tab`, `Enter` y `Escape` | Orden lógico, foco siempre visible, sin trampas y menú restaurando el foco | Parcial: flujo crítico automatizado; pendiente recorrido manual completo |
| Lector de pantalla | Revisar regiones, encabezados, navegación, botón de menú y feedback de copia | Nombres, roles, estados y mensajes comprensibles sin referencia visual | Pendiente |
| Contraste | Medir combinaciones normales, estados, bordes informativos y foco | Cumplimiento AA aplicable; ninguna señal depende solo del color | Parcial: auditoría automatizada aprobada; pendiente medición manual exhaustiva |
| Movimiento reducido | Activar `prefers-reduced-motion: reduce` en el sistema o las herramientas del navegador | Contenido inmediato, funcional y sin movimiento no esencial | Completada en emulación de navegador |
| JavaScript deshabilitado | Cargar y recorrer el sitio con JS desactivado | Contenido, anclas, CV y canales de contacto disponibles | Completada |
| Responsive | Revisar 320, 375, 768, 1024 y 1440 px, además de zoom del 200 % | Sin desplazamiento horizontal accidental, solapamientos ni pérdida de contenido | Parcial: anchos completados; pendiente zoom manual del 200 % |
| Tacto y puntero | Usar controles en pantalla táctil y con ratón | Áreas cómodas, feedback claro y ninguna función exclusiva de `hover` | Pendiente |
| Contenido y privacidad | Contrastar texto con el CV y revisar los tres proyectos | Sin datos inventados, confidenciales o afirmaciones cuantitativas no sustentadas | Completada |
| Enlaces y archivos | Probar anclas, CV, correo, GitHub y LinkedIn localmente y en Pages | Destinos correctos, sin recursos 404 y descarga del CV disponible | Parcial: destinos locales completados; pendiente URL pública y plataformas externas |
| Robustez | Revisar consola y panel de red; provocar rechazo del portapapeles | Sin errores no controlados; el fallo de copia ofrece recuperación | Parcial: consola y red completadas; pendiente rechazo manual del portapapeles |
| Marcado | Ejecutar un validador HTML y revisar el árbol de accesibilidad | Sin errores estructurales que afecten semántica o interacción | Completada mediante validador y auditoría automatizada |
| Rendimiento | Ejecutar Lighthouse en una compilación servida y en la URL pública | Registrar resultados reales y analizar hallazgos | Parcial: servidor local completado; pendiente URL pública |
| Compatibilidad | Probar versiones actuales de Chrome/Edge y Firefox; Safari/iOS cuando esté disponible | Funciones esenciales equivalentes y degradación comprensible | Pendiente |

Las metas orientativas del brief —Performance 90+, Accessibility 95+, Best Practices 95+ y SEO 90+— se superaron en la auditoría local registrada. Deben confirmarse de nuevo después del despliegue.

### 10.3 Registro de QA

| Fecha | Versión/commit | Entorno | Prueba | Resultado | Evidencia | Corrección o pendiente |
|---|---|---|---|---|---|---|
| 2026-10-13 | Entrega local sin commit | Edge 155, Lighthouse 13.5.0, html-validate 11.16.2 | Validación, responsive, interacción, mejora progresiva, recursos y auditoría | Sin incidencias críticas, altas o medias pendientes dentro del alcance automatizado; metas Lighthouse superadas | Resultados resumidos en 10.1 y README | Completar lector de pantalla, dispositivos físicos, compatibilidad adicional y prueba sobre despliegue |

## 11. Mejoras futuras

Las mejoras deben priorizarse a partir de evidencia, no por novedad visual.

1. Realizar pruebas breves con representantes de las tres audiencias prioritarias y medir éxito, tiempo y dudas en tareas críticas.
2. Incorporar páginas de caso más profundas solo si existe contenido público autorizado y aportan valor frente al resumen actual.
3. Optimizar formatos y tamaños de imagen según datos reales de rendimiento y densidad de pantalla.
4. Añadir datos estructurados de perfil o proyectos después de validar su pertinencia y contenido.
5. Evaluar una traducción completa al inglés si la audiencia internacional lo justifica; no añadir un selector hasta disponer de paridad de contenido.
6. Automatizar validación de enlaces, HTML y auditorías en integración continua sin sustituir las pruebas manuales de teclado y lector de pantalla.
7. Revisar analítica respetuosa de la privacidad únicamente si existe una pregunta de producto concreta y consentimiento adecuado.
8. Mantener un ciclo de revisión del CV, certificaciones, enlaces y fechas para evitar contenido obsoleto.

## 12. Criterio de mantenimiento

Cada cambio significativo debe responder cuatro preguntas:

1. ¿Qué necesidad de usuario resuelve?
2. ¿Qué componente o flujo modifica?
3. ¿Qué riesgo de accesibilidad o usabilidad introduce?
4. ¿Cómo se verificará y dónde quedará la evidencia?

Este criterio mantiene la trazabilidad académica y evita que el portafolio acumule efectos o componentes sin una función clara.
