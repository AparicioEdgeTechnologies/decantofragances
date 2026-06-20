# DeCanto — Sitio web (Grupo RRA)

Sitio web estático (HTML / CSS / JS puro, sin frameworks ni build) para la
perfumería **DeCanto**, de **Grupo RRA**.

## Estructura del proyecto

```
decanto-website/
├── index.html        → Inicio
├── catalogo.html      → Catálogo de productos (con filtros por colección)
├── nosotros.html       → Historia y valores de la marca
├── blog.html           → Blog / notas de perfumista
├── contacto.html        → Formulario y datos de contacto
├── css/
│   └── style.css        → Sistema de diseño completo (colores, tipografía, componentes)
├── js/
│   └── script.js         → Menú móvil, filtros, formularios, animaciones al hacer scroll
├── assets/img/            → Aquí va tu logo y fotografías de producto
└── README.md
```

## Cómo abrir el proyecto en Visual Studio Code

1. Descarga/copia la carpeta `decanto-website` a tu computadora.
2. Abre VS Code → `Archivo > Abrir carpeta...` → selecciona `decanto-website`.
3. Instala la extensión **Live Server** (de Ritwick Dey) para ver el sitio en
   vivo mientras editas: clic derecho sobre `index.html` → "Open with Live Server".
4. Reemplaza los textos, precios y descripciones de ejemplo por tu contenido real.
5. Coloca tu logo en `assets/img/logo.svg` (o `.png`) y, si quieres usarlo en
   vez del nombre en texto, reemplaza en cada HTML:
   ```html
   <a href="index.html" class="brand">DeCanto <small>Grupo RRA</small></a>
   ```
   por:
   ```html
   <a href="index.html" class="brand"><img src="assets/img/logo.svg" alt="DeCanto" style="height:32px;"></a>
   ```

## Personalización rápida

- **Colores**: todos están definidos como variables al inicio de
  `css/style.css`, dentro de `:root`. Cambia ahí `--navy-deep`,
  `--blue-metal`, `--silver`, etc. y se actualiza todo el sitio.
- **Tipografía**: se cargan desde Google Fonts (Cormorant Garamond + Jost) en
  la primera línea de `style.css`.
- **Productos**: cada tarjeta en `catalogo.html` es un bloque `<article
  class="product-card" data-category="...">` — duplica el bloque para añadir
  productos nuevos.
- **Formularios**: `contacto.html` y el newsletter del inicio están
  conectados a `js/script.js` en modo demo (solo muestran un mensaje de
  confirmación). Para que envíen correos de verdad necesitas conectarlos a un
  servicio como Formspree, Getform, o un backend propio — pídeme ayuda cuando
  llegues a ese paso.

## Subir el proyecto a GitHub

```bash
cd decanto-website
git init
git add .
git commit -m "Sitio inicial DeCanto - Grupo RRA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/decanto-website.git
git push -u origin main
```

## ⚠️ Nota importante sobre Squarespace

Squarespace **no funciona como un hosting de archivos estáticos tradicional**
(a diferencia de GitHub Pages, Netlify o Vercel). Squarespace es un
constructor de sitios con su propio sistema de plantillas y no permite subir
una carpeta de HTML/CSS/JS y publicarla tal cual desde GitHub.

Tus opciones reales son:

1. **Recrear el diseño dentro de Squarespace** usando sus bloques de código
   (Squarespace permite insertar bloques de **Código** con HTML/CSS dentro de
   una página, pero no un sitio multi-página completo como este).
2. **Usar un hosting que sí sirve archivos estáticos directo desde GitHub**,
   gratuito y mucho más simple para este proyecto:
   - **GitHub Pages** (gratis, conectado directo a tu repo)
   - **Netlify** o **Vercel** (gratis, despliegue automático en cada `push`)
3. **Conectar tu dominio** (si lo compraste en Squarespace Domains) a
   cualquiera de esos hostings, sin necesidad de usar el constructor de
   Squarespace.

Si quieres, puedo ayudarte a dejar este sitio publicado en GitHub Pages o
Netlify en minutos, o a adaptar el código para los bloques de Squarespace.
