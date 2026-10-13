# Portafolio digital de Jorge Torres Maldonado

Portafolio personal de una sola página para presentar la formación, experiencia, proyectos y perfil técnico de **Jorge Torres Maldonado**, estudiante de Ingeniería en Ciencias de la Computación en la Escuela Politécnica Nacional.

El proyecto busca que un reclutador pueda reconocer rápidamente el perfil profesional, que una persona técnica pueda profundizar en los proyectos y que la aplicación de principios de Interacción Humano-Computador (HCI) sea identificable y defendible. La dirección visual toma como referencia el minimalismo editorial de productos digitales premium, sin copiar recursos o componentes de terceros.

## Tecnologías

- HTML5 semántico.
- CSS3 con propiedades personalizadas, diseño mobile first y tamaños fluidos.
- JavaScript ES6+ y APIs nativas del navegador.
- `IntersectionObserver` para mejoras progresivas de movimiento y eventos pasivos de desplazamiento para el estado de navegación.
- Sin frameworks, proceso de compilación ni dependencias de producción.

## Estructura del proyecto

```text
.
├── index.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   └── fotocv.jpeg
│   ├── documents/
│   │   └── TorresJorgeCV.pdf
│   └── icons/
│       └── favicon.svg
├── docs/
│   └── hci-decisions.md
├── .nojekyll
└── README.md
```

La separación propuesta mantiene los tokens y estilos base independientes de los componentes y del comportamiento responsive. JavaScript se reserva para interacciones que CSS no resuelve por sí solo: menú móvil accesible, indicador de sección, confirmación al copiar el correo y activación progresiva de animaciones. Los recursos públicos usan rutas relativas para funcionar tanto localmente como en GitHub Pages.

## Secciones del sitio

1. Navegación principal.
2. Presentación o *hero*.
3. Sobre mí.
4. Proyectos destacados.
5. Experiencia profesional.
6. Tecnologías y habilidades.
7. Formación, certificaciones, logro e idiomas.
8. Contacto.
9. Pie de página.

La navegación mediante anclas permite entrar directamente a las áreas prioritarias sin imponer una secuencia de lectura.

## Ejecución local

No se requiere instalar paquetes. Aunque el archivo `index.html` puede abrirse directamente, se recomienda servirlo por HTTP para reproducir mejor el entorno de publicación.

Desde la raíz del proyecto:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Si el lanzador `py` no está disponible:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Después, abrir `http://localhost:8000/`. Para detener el servidor, usar `Ctrl+C`. El enlace a `127.0.0.1` limita el servidor al equipo local y evita exponer por la red los archivos fuente de trabajo ubicados en la raíz.

También puede emplearse un servidor estático equivalente, como Live Server de Visual Studio Code. No es necesario ejecutar `npm install` ni una tarea de *build*.

## Despliegue en GitHub Pages

1. Crear un repositorio en GitHub y subir el contenido del proyecto, con `index.html` en la raíz.
2. En el repositorio, abrir **Settings → Pages**.
3. En **Build and deployment**, seleccionar **Deploy from a branch**.
4. Elegir la rama `main`, la carpeta `/ (root)` y guardar.
5. Esperar a que GitHub muestre la URL publicada y revisar en esa URL la imagen, el CV, los enlaces y la navegación.

Antes de publicar conviene confirmar que todas las rutas respetan mayúsculas y minúsculas y son relativas al repositorio. Esto evita fallos que pueden pasar inadvertidos en Windows, pero aparecer en GitHub Pages.

## Decisiones principales de diseño

- **Lectura en capas:** identidad, especialidad y llamadas a la acción aparecen primero; proyectos y experiencia ofrecen mayor profundidad después.
- **Composición editorial:** el *hero* integra la fotografía profesional y el contenido en una composición de dos columnas que se convierte en una sola columna en pantallas estrechas.
- **Proyectos con contexto:** cada caso expone problema, solución, participación y tecnologías sin inventar métricas, demostraciones ni capturas de sistemas internos.
- **Reconocimiento sobre recuerdo:** las tecnologías se agrupan por categoría y la navegación utiliza etiquetas descriptivas; no se usan porcentajes de dominio subjetivos.
- **Sistema visual consistente:** colores neutros, acento azul, tipografía del sistema, espacios amplios, radios y sombras sutiles definidos mediante tokens CSS.
- **Movimiento funcional:** las transiciones refuerzan cambios de estado y jerarquía; no controlan el desplazamiento ni retrasan el acceso al contenido.
- **Privacidad y honestidad:** no se exponen datos personales innecesarios ni se prometen enlaces a proyectos que no son públicos.

La argumentación completa se encuentra en [docs/hci-decisions.md](docs/hci-decisions.md).

## Accesibilidad prevista

El diseño toma WCAG 2.2 nivel AA como referencia e incluye, como requisitos de implementación:

- regiones semánticas y jerarquía coherente de encabezados;
- enlace “Saltar al contenido principal”;
- navegación completa mediante teclado y foco visible;
- menú móvil con `aria-expanded`, cierre con `Escape` y retorno del foco;
- texto alternativo útil para la fotografía y etiquetas descriptivas para enlaces;
- feedback visible y anunciado al copiar el correo;
- contraste suficiente y estados que no dependen únicamente del color;
- objetivos táctiles cómodos y contenido adaptable sin desplazamiento horizontal;
- contenido funcional sin JavaScript y sin animaciones;
- adaptación a `prefers-reduced-motion: reduce`.

## Estado de verificación

### Pruebas realizadas — 13 de octubre de 2026

- **Marcado:** `html-validate 11.16.2` finalizó con 0 errores y 0 advertencias.
- **Responsive:** inspección automatizada y visual en Microsoft Edge 155 a `320`, `375`, `768`, `1024` y `1440` px; no se detectó desbordamiento horizontal ni contenido oculto.
- **Interacciones:** menú móvil, `aria-expanded`, cierre con `Escape`, restauración del foco, copia del correo, navegación interna e indicador de sección activa funcionaron correctamente.
- **Mejora progresiva:** el contenido y las acciones esenciales permanecieron disponibles con JavaScript deshabilitado; con `prefers-reduced-motion: reduce` no se ocultó contenido ni se mantuvo desplazamiento animado.
- **Recursos y robustez:** los recursos locales respondieron con estado 200 y tipos MIME correctos; no aparecieron errores de consola ni solicitudes fallidas durante la sesión de prueba.
- **CV público:** se verificaron sus dos páginas mediante extracción de texto y renderizado visual. La copia pública conserva la información profesional y omite el número telefónico por privacidad; el archivo fuente no fue modificado.

#### Auditoría Lighthouse local

| Categoría | Resultado |
|---|---:|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

La auditoría se ejecutó con Lighthouse 13.5.0 sobre un servidor local. Registró FCP de 1,5 s, LCP de 1,6 s, TBT de 0 ms y CLS de 0. Son resultados de laboratorio local, no una garantía del comportamiento del sitio una vez publicado.

### Pruebas recomendadas antes de publicar

- Recorrer el sitio con NVDA, VoiceOver u otro lector de pantalla real y confirmar el anuncio de la copia del correo.
- Probar en dispositivos físicos iOS y Android, así como en versiones actuales de Firefox y Safari.
- Verificar desde la URL publicada la descarga del CV y el acceso a GitHub y LinkedIn, ya que las plataformas externas pueden modificar sus respuestas.
- Repetir Lighthouse y la inspección de red sobre el despliegue de producción.

Los detalles, alcance y pendientes de la evaluación se registran en [docs/hci-decisions.md](docs/hci-decisions.md).
